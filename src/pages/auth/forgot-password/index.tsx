import { ForgotPassword } from "@/modules";
import { NextSeo } from "next-seo";

export default function ForgotPasswordPage() {

  return (
    <>
      <NextSeo
        title="Forget password | Nomad"
        description="Learn more about our team and mission."
        canonical="http://localhost:3000/auth/forget-password"
        openGraph={{
            url: "http://localhost:3000/auth/forget-password",
            title: "Forget password | Nomad",
            description: 'Learn more about our team and mission.',
        }}
      />
      <main>
          <ForgotPassword/>
      </main>
    </>
  );
};