"use client";

import { useEffect, useState } from "react";
import { isTikTokInAppBrowser } from "../lib/inAppBrowser";

const accent = "#0F9900";

type TikTokInAppHintProps = {
  text: string;
};

export function TikTokInAppHint({ text }: TikTokInAppHintProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isTikTokInAppBrowser());
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 10,
        maxWidth: 260,
        padding: "12px 14px",
        background: "rgba(26, 26, 26, 0.95)",
        border: `1px solid rgba(15, 153, 0, 0.35)`,
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -28,
          right: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: accent,
        }}
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <path
            d="M10 26V6M10 6L4 12M10 6L16 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span style={{ fontSize: 18, letterSpacing: 2, lineHeight: 1 }}>•••</span>
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 12,
          lineHeight: 1.5,
          color: "#e5e5e5",
          textAlign: "left",
        }}
      >
        {text}
      </p>
    </div>
  );
}
