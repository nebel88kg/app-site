"use client";

import { AppLogo } from "./AppLogo";
import { BackgroundAccents } from "./BackgroundAccents";
import type { Locale } from "../lib/i18n";
import { inAppFullscreenCopy } from "../lib/i18n";

const accent = "#0F9900";
const bg = "#0f0f0f";
const text = "#f5f5f5";
const muted = "#999";

type TikTokFullscreenHintProps = {
  locale: Locale;
};

export function TikTokFullscreenHint({ locale }: TikTokFullscreenHintProps) {
  const copy = inAppFullscreenCopy[locale];

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BackgroundAccents />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 24px",
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 48px)",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "calc(env(safe-area-inset-top, 0px) + 20px)",
            right: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: accent,
          }}
        >
          <svg width="56" height="64" viewBox="0 0 24 28" fill="none">
            <path
              d="M12 24V4M12 4L6 10M12 4L18 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <AppLogo size={88} />

        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            marginTop: 20,
            marginBottom: 32,
            lineHeight: 1.2,
          }}
        >
          KeepPushing
        </h1>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxWidth: 320,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            textAlign: "left",
          }}
        >
          {[copy.step1, copy.step2].map((step, index) => (
            <li
              key={step}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                fontSize: 17,
                lineHeight: 1.45,
                color: text,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: accent,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <p style={{ marginTop: 48, fontSize: 14, color: muted, maxWidth: 280 }}>
          {locale === "de"
            ? "Danach wirst du automatisch zum App Store weitergeleitet."
            : "You'll be redirected to the App Store automatically."}
        </p>
      </div>
    </div>
  );
}
