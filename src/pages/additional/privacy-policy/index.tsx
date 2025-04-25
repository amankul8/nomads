import React from "react";
import { Layout } from "@/layouts";
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { REVALIDATE_INTERVAL } from "@/config";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/static-pages/tourism/privacy_policy.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
}

interface PrivacyPolicy {
    htmlContent: string
}

const PrivacyPolicy:React.FC<PrivacyPolicy> = ({htmlContent}) => {

    React.useEffect(()=>{
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/static-pages/tourism/assets/css/style.css';
        document.head.appendChild(link);

        return () => {
        document.head.removeChild(link);
        };
    }, []);

    return (
        <Layout>
            <Head>
                <title>Privacy Policy - Nomads Voyage</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Layout>
    )
}

PrivacyPolicy.displayName = "PrivacyPolicy";
export default PrivacyPolicy;