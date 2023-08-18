import Layout from "@/components/Layout";
import { ObjectId } from "mongodb";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

type TodoData = {
  _id: ObjectId;
  content: string;
  done: boolean;
};

export const getStaticProps: GetStaticProps<{
  todos: TodoData[];
}> = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/todos`);
  const todos = await res.json();

  return { props: { todos } };
};

export default function Todo({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoData, setTodoData] = useState<TodoData[]>(todos);

  async function hanldeOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const res = await fetch('/api/todos', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: todoInput, done: false })
    });

    const newTodoData = await res.json();
    setTodoData(newTodoData);
  }

  return (
    <Layout className="space-y-8">
      <form onSubmit={hanldeOnSubmit} className="space-y-2 mt-16">
        <input
          className="ipt"
          type="text"
          placeholder="todo"
          value={todoInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodoInput(e.target.value)
          }
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <ul className="space-y-4 font-medium text-xl px-8">
        {todoData.map((todo) => {
          return (
            <li key={todo._id.toString()} className="flex gap-4 items-center">
              <input
                className="rounded-full w-6 h-6"
                type="checkbox"
                defaultChecked={todo.done}
                onChange={async (event: ChangeEvent<HTMLInputElement>) => {
                  const res = await fetch(`/api/todos/${todo._id.toString()}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ done: event.target.checked }),
                  });

                  const newTodoData = await res.json();
                  setTodoData(newTodoData);
                }}
              />
              <span className={`${todo.done ? 'line-through opacity-40' : ''}`}>{todo.content}</span>
              <button
                className=""
                onClick={async (
                  event: React.MouseEvent<HTMLButtonElement>
                ) => {
                  const res = await fetch(`/api/todos/${todo._id.toString()}`, { method: 'DELETE' });
                  const newTodoData = await res.json();
                  setTodoData(newTodoData);
                }}
              >
                &#10060;
              </button>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
