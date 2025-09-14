import React, { useEffect, useState, useCallback } from "react";
import { Layout } from "@/layouts";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Loading from "@/components/loading";
import Script from "next/script";

const Uaz: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHtmlContent = useCallback(async () => {
    try {
      const res = await fetch("/static-pages/uaz/uaz.html");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.text();
      setHtmlContent(data);
    } catch (err) {
      console.error("Error loading HTML file:", err);
      setError("Error loading the page content. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHtmlContent();
  }, [fetchHtmlContent]);

  if (loading) {
    return (
      <Box role="status" aria-live="polite" sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </Box>
    );
  }

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

      {error ? (
        <Box role="alert" aria-live="assertive" sx={{ padding: 2 }}>
          <Typography color="error" variant="body1">
            {error}
          </Typography>
        </Box>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}

      <Script src="/static-pages/uaz/assets/js/script.js" strategy="afterInteractive" />
      <Script src="/static-pages/uaz/assets/js/360img.js" strategy="afterInteractive" />
      <Script src="/static-pages/uaz/assets/js/360.js" strategy="afterInteractive" />
    </Layout>
  );
};

Uaz.displayName = "Uaz";

export default Uaz;
