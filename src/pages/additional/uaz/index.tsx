import React from "react";
import { Layout } from "@/layouts";
import fs from "fs";
import path from "path";
import Head from "next/head";
import { REVALIDATE_INTERVAL } from "@/config";
import Script from "next/script";

// This function runs on the server side at build time and fetches the HTML content.
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/static-pages/uaz/uaz.html");
  let htmlContent = "";

  try {
    // Try reading the file content from the given path
    htmlContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading HTML file:", error);
    htmlContent = "";
  }

  return {
    props: {
      htmlContent,
    },
    revalidate: REVALIDATE_INTERVAL, // Periodic regeneration for static props
  };
}

interface UazProps {
  htmlContent: string;
}

const Uaz: React.FC<UazProps> = ({ htmlContent }) => {
  return (
    <Layout>
      <Head>
        <title>Rent a UAZ Buhanka in Bishkek | Affordable & Reliable 4x4 Van Rental with Roof Tent</title>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta
          name="description"
          content="Rent a UAZ Buhanka with a roof tent in Bishkek for the ultimate off-road adventure! Sleep comfortably, explore Kyrgyzstan’s mountains, and save with all-inclusive rental packages. Book your 4x4 camper today."
        />
        <meta
          name="keywords"
          content="uaz buhanka roof tent bishkek, 4x4 campervan rental, off-road camping kyrgyzstan, soviet van with tent, rent overlanding car bishkek, uaz bukhanka for camping"
        />
        <meta property="og:title" content="UAZ Buhanka with Roof Tent Rental | Bishkek Adventure Camper" />
        <meta
          property="og:description"
          content="Explore Kyrgyzstan’s wild landscapes in a UAZ Buhanka equipped with a roof tent! Fully stocked 4x4 campervan rentals in Bishkek."
        />
        <meta property="og:image" content="https://nomads.voyage/images/uaz-buhanka-roof-tent.jpg" />
        <meta property="og:url" content="https://nomads.voyage/uaz-buhanka-roof-tent-bishkek" />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="/static-pages/uaz/assets/css/stl.css" />
      </Head>

      {/* Render HTML content safely */}
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <div>Error loading the page content. Please try again later.</div>
      )}

      {/* Load JavaScript files after the page becomes interactive */}
      <Script src="/static-pages/uaz/assets/js/script.js" strategy="afterInteractive" />
      <Script src="/static-pages/uaz/assets/js/360img.js" strategy="afterInteractive" />
      <Script src="/static-pages/uaz/assets/js/360.js" strategy="afterInteractive" />
    </Layout>
  );
};

Uaz.displayName = "Uaz";

export default Uaz;
