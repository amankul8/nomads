import React, { useEffect, useState } from "react";
import { Layout } from "@/layouts";
import Head from "next/head";
import { Box } from "@mui/material";
import Loading from "@/components/loading";

const TermsConditions: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Динамическая загрузка HTML контента
  useEffect(() => {
    fetch("/static-pages/tourism/terms&conditions.html")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then((data) => {
        setHtmlContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading HTML file:", err);
        setError("Error loading the page content. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Подключение CSS
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/static-pages/tourism/assets/css/style.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </Box>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Terms and Conditions - Nomads Voyage</title>
      </Head>

      {error ? (
        <Box sx={{ padding: 2, color: "error.main" }}>{error}</Box>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      )}
    </Layout>
  );
};

TermsConditions.displayName = "TermsConditions";

export default TermsConditions;
