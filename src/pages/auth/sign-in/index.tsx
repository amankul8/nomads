import {SignIn} from "@/modules"
import { NextSeo } from "next-seo";

interface ISigninState{
  email: string,
  password: string
}


export default function SignInPage() {

  return (
    <>
      <NextSeo
        title="Sign-in | Nomad"
        description="Learn more about our team and mission."
        canonical="http://localhost:3000/auth/sign-in"
        openGraph={{
            url: "http://localhost:3000/auth/sign-in",
            title: "Sign-in | Nomad",
            description: 'Learn more about our team and mission.',
        }}
      />

      <main>
        <SignIn/>
      </main>
    </>
  );
};