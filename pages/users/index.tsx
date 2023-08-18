import Layout from "@/components/Layout";
import { InferGetServerSidePropsType, GetStaticProps } from "next";

type UserData = {
  _id: string;
  name: string;
  age: number;
}

export const getStaticProps: GetStaticProps<{ users: UserData[] }> = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/users`);
  const users = await res.json();

  return { props: { users } };
}

export default function Page({ users }: InferGetServerSidePropsType<typeof getStaticProps>) {

  return (
    <Layout>
      { users.map(user => {
        return (
          <div key={user._id.toString()}>
            <h1>Name: { user.name }</h1>
            <p>Age: { user.age }</p>
            <p>ID: { user._id.toString() }</p>
          </div>
        )
      })}
    </Layout>
  )
}
