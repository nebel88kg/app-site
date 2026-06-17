"use client";

import Link from "next/link";
import { BackgroundAccents } from "./components/BackgroundAccents";
import { landingCopy } from "./lib/i18n";
import { useLocale } from "./lib/useLocale";

const accent = "#0F9900";
const bg = "#0f0f0f";
const cardBg = "#1a1a1a";
const text = "#f5f5f5";
const muted = "#999";

export default function LandingPage() {
  const locale = useLocale();
  const copy = landingCopy[locale];

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

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 720,
          margin: "0 auto",
          padding: "64px 24px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: accent,
            marginBottom: 20,
          }}
        >
          KeepPushing · {copy.eyebrow}
        </p>

        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 20,
            whiteSpace: "pre-line",
          }}
        >
          {copy.headline}
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: muted,
            maxWidth: 520,
            margin: "0 auto 36px",
          }}
        >
          {copy.subtitle}
        </p>

        <Link
          href="/app"
          style={{
            display: "inline-block",
            padding: "16px 32px",
            background: accent,
            color: "#fff",
            borderRadius: 12,
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {copy.cta}
        </Link>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 64,
            textAlign: "left",
          }}
        >
          {copy.features.map((feature) => (
            <article
              key={feature.title}
              style={{
                background: `linear-gradient(160deg, rgba(15, 153, 0, 0.06) 0%, ${cardBg} 45%)`,
                border: "1px solid rgba(15, 153, 0, 0.12)",
                borderRadius: 16,
                padding: "24px 20px",
              }}
            >
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
                {feature.title}
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: muted }}>
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <p style={{ marginTop: 48, fontSize: 12, color: "#555" }}>
          {copy.footer}
        </p>
      </main>
    </div>
  );
}
