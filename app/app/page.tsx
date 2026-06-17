"use client";

import Link from "next/link";
import { BackgroundAccents } from "../components/BackgroundAccents";
import { TikTokInAppHint } from "../components/TikTokInAppHint";
import { downloadCopy } from "../lib/i18n";
import { useLocale } from "../lib/useLocale";

const accent = "#0F9900";
const bg = "#0f0f0f";
const text = "#f5f5f5";

export default function DownloadPage() {
  const locale = useLocale();
  const copy = downloadCopy[locale];

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
      <BackgroundAccents />
      <TikTokInAppHint text={copy.inAppHint} />

      <Link
        href="/"
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          color: "#666",
          textDecoration: "none",
          fontSize: 14,
          zIndex: 2,
        }}
      >
        ← KeepPushing
      </Link>

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
        <h1 style={{ fontSize: 40, fontWeight: 800 }}>KeepPushing</h1>

        <p style={{ fontSize: 18, color: "#999", marginTop: 8 }}>{copy.tagline}</p>

        <div style={{ marginTop: 30 }}>
          <a
            href="https://apps.apple.com/app/id6755646753"
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
