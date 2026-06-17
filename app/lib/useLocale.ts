"use client";

import { useEffect, useState } from "react";
import { detectGermany, type Locale } from "./i18n";

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    detectGermany().then((inGermany) => {
      setLocale(inGermany ? "de" : "en");
    });
  }, []);

  return locale;
}
