"use client";

import { useEffect, useState } from "react";
import { shouldShowInAppHint } from "../lib/inAppBrowser";

const accent = "#0F9900";

type TikTokInAppHintProps = {
  text: string;
};

export function TikTokInAppHint({ text }: TikTokInAppHintProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceShow = params.get("inapp") === "1";

    setVisible(forceShow || shouldShowInAppHint());
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: "12px 16px",
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 52px)",
          background: "rgba(15, 153, 0, 0.15)",
          borderBottom: `1px solid rgba(15, 153, 0, 0.4)`,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 480,
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <div
            aria-hidden
            style={{
              flexShrink: 0,
              width: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              color: accent,
              paddingTop: 2,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 3,
                lineHeight: 1,
                display: "block",
              }}
            >
              •••
            </span>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              style={{ display: "block", flexShrink: 0 }}
            >
              <path
                d="M8 18V4M8 4L3 9M8 4L13 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.45,
              color: "#f0f0f0",
              fontWeight: 500,
            }}
          >
            {text}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        style={{ height: "calc(env(safe-area-inset-top, 0px) + 120px)", flexShrink: 0 }}
      />
    </>
  );
}
