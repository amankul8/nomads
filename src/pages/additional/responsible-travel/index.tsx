import React from "react";
import { Layout } from "@/layouts";
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { REVALIDATE_INTERVAL } from "@/config";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/static-pages/tourism/responsible-travel.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
}

interface ResponsiblePolicy {
    htmlContent: string
}

const ResponsiblePolicy:React.FC<ResponsiblePolicy> = ({htmlContent}) => {

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
                <title>Responsible Tourism with Nomads Voyage</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
        </Layout>
    )
}

ResponsiblePolicy.displayName = "ResponsiblePolicy";
export default ResponsiblePolicy;