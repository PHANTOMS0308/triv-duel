import Logo from "@/components/Logo";
import Layout from "@/components/Layout";
import ButtonLink from "@/components/ButtonLink";

export default function Index() {
  return (
    <Layout className="flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center">
        <Logo />
      </div>
      <div className="space-y-4">
        <ButtonLink href="/signup" ariaLabel="Go to Signup Page" highlight>
          <span>SIGN UP</span>
        </ButtonLink>
        <ButtonLink href="/login" ariaLabel="Go to Login Page">
          <span>LOG IN</span>
        </ButtonLink>
      </div>
    </Layout>
  );
}
