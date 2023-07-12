import {SignIn} from "@/modules"

interface ISigninState{
  email: string,
  password: string
}


export default function SignInPage() {

  return (
    <main>
      <SignIn/>
    </main>
  );
};