import React from "react";
import { Layout } from "@/layouts";
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { REVALIDATE_INTERVAL } from "@/config";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/static-pages/tourism/terms&conditions.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
}

interface TermsConditions {
    htmlContent: string
}

const TermsConditions:React.FC<TermsConditions> = ({htmlContent}) => {

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
                <title>Terms and Conditions - Nomads Voyage</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Layout>
    )
}

TermsConditions.displayName = "TermsConditions";
export default TermsConditions;