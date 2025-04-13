import React from "react";
import { Layout } from "@/layouts";
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { REVALIDATE_INTERVAL } from "@/config";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/static-pages/uaz.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
}

interface Uaz {
    htmlContent: string
}

const Uaz:React.FC<Uaz> = ({htmlContent}) => {

    return (
        <React.Fragment>
            <Head>
                <title>Моя статическая страница</title>
                {/* <link rel="stylesheet" href="/static-page/style.css"/>
                <script src="/static-page/script.js" defer></script> */}
            </Head>

            <Layout>
                <section className="container">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
                </section>
            </Layout>
        </React.Fragment>
    )
}

Uaz.displayName = "Uaz";
export default Uaz;