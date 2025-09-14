import { ResetPassword } from "@/modules";
import { NextSeo } from "next-seo";


export default function ResetPasswordPage() {

  return (

    <>
      <NextSeo
        title="Reset password | Nomad"
        description="Learn more about our team and mission."
        canonical="http://localhost:3000/auth/reset-password"
        openGraph={{
            url: "http://localhost:3000/auth/reset-password",
            title: "Reset password | Nomad",
            description: 'Learn more about our team and mission.',
        }}
      />

      <main>
        <ResetPassword/>
      </main>
    </>
  );
};