import { ConfirmAccount } from "@/modules";
import { NextSeo } from "next-seo";


export default function ConfirmAccountPage() {
  
  return (
    <>
      <NextSeo
        title="Confirm code | Nomad"
        description="Learn more about our team and mission."
        canonical="http://localhost:3000/auth/confirm-account"
        openGraph={{
            url: "http://localhost:3000/auth/confirm-account",
            title: "Confirm code | Nomad",
            description: 'Learn more about our team and mission.',
        }}
      />
      <main>
        <ConfirmAccount/>
      </main>
    </>
  );
};