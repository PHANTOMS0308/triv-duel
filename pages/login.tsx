import Layout from "@/components/Layout";
import ButtonLink from "@/components/ButtonLink";
import Link from "next/link";

export default function Login() {
  return (
    <Layout goBackTo="/" className="flex flex-col justify-between">
      <header className="space-y-4 mt-12">
        <h1 className="font-extrabold text-6xl">Welcome Back</h1>
        <p className="font-medium text-xl">
          Ready for another trivia challenge?
        </p>
      </header>
      <form 
        id="form__login" 
        method="POST" 
        action="/" 
        className="flex flex-col gap-4 mb-4"
      >
        <label className="space-y-1">
          <span className="block font-medium text-lg">Username</span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="
              w-full rounded-2xl text-xl py-4
              bg-transparent border-2
              focus:ring-0 focus:border-blue-500
              dark:focus:border-orange-300
            "
          />
        </label>  
        <label className="space-y-1">
          <span className="block font-medium text-lg">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="
              w-full rounded-2xl text-xl py-4
              bg-transparent border-2
              focus:ring-0 focus:border-blue-500
              dark:focus:border-orange-300
            "
          />
        </label>
      </form>
      <div className="text-center space-y-2">
        <span>
          Don't have an account?&nbsp;
          <Link
            href="/signup"
            className="vy first:
              underline underline-offset-2
              text-blue-600 dark:text-orange-300
            "
          >
            Sign Up
          </Link>
        </span>
        <button type="submit" form="form__login" className="btn">
          LOG IN
        </button>
      </div>
    </Layout>
  );
}
