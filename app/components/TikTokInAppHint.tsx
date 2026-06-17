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
          padding: "8px 16px",
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 14px)",
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
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              margin: 0,
              flex: 1,
              fontSize: 13,
              lineHeight: 1.45,
              color: "#f0f0f0",
              fontWeight: 500,
            }}
          >
            {text}
          </p>

          <svg
            aria-hidden
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            style={{ flexShrink: 0, color: accent }}
          >
            <path
              d="M9 20V4M9 4L4 9M9 4L14 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        aria-hidden
        style={{ height: "calc(env(safe-area-inset-top, 0px) + 72px)", flexShrink: 0 }}
      />
    </>
  );
}
