"use client";

import { useEffect } from "react";
import { AppLogo } from "../components/AppLogo";
import { BackgroundAccents } from "../components/BackgroundAccents";
import { PageHead } from "../components/PageHead";
import { TikTokFullscreenHint } from "../components/TikTokFullscreenHint";
import { APP_STORE_URL } from "../lib/constants";
import { downloadCopy } from "../lib/i18n";
import { useInAppBrowser } from "../lib/useInAppBrowser";
import { useLocale } from "../lib/useLocale";

const accent = "#0F9900";
const bg = "#0f0f0f";
const text = "#f5f5f5";

export default function DownloadPage() {
  const locale = useLocale();
  const copy = downloadCopy[locale];
  const inApp = useInAppBrowser();

  useEffect(() => {
    if (inApp === false) {
      window.location.replace(APP_STORE_URL);
    }
  }, [inApp]);

  if (inApp === null) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: bg,
        }}
      />
    );
  }

  if (inApp) {
    return (
      <>
        <PageHead title="KeepPushing — Download" />
        <TikTokFullscreenHint locale={locale} />
      </>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PageHead title="KeepPushing — Download" />
      <BackgroundAccents />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 600,
          margin: "0 auto",
          padding: "60px 24px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AppLogo size={104} />

        <p style={{ fontSize: 18, color: "#999", marginTop: 16 }}>{copy.tagline}</p>

        <div style={{ marginTop: 30 }}>
          <a
            href={APP_STORE_URL}
            style={{
              display: "inline-block",
              padding: "16px 28px",
              background: accent,
              color: "#fff",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {copy.button}
          </a>
        </div>

        <p style={{ marginTop: 20, fontSize: 12, color: "#666" }}>{copy.footnote}</p>
      </main>
    </div>
  );
}
