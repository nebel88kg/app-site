"use client";

import { useEffect, useState } from "react";
import { shouldShowInAppHint } from "../lib/inAppBrowser";

export function useInAppBrowser(): boolean | null {
  const [inApp, setInApp] = useState<boolean | null>(null);

  useEffect(() => {
    const forceShow =
      new URLSearchParams(window.location.search).get("inapp") === "1";
    setInApp(forceShow || shouldShowInAppHint());
  }, []);

  return inApp;
}
