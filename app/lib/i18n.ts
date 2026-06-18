export type Locale = "de" | "en";

export const downloadCopy = {
  de: {
    tagline: "Dein Laufcoach",
    button: "App herunterladen",
    footnote: "Kostenlos starten • iOS verfügbar",
  },
  en: {
    tagline: "Your running coach",
    button: "Download App",
    footnote: "Start for free • Available on iOS",
  },
} as const;

export const inAppHintCopy = {
  de: "In TikTok: Tippe oben rechts auf die 3 Punkte · Dann „Im Browser öffnen“, um KeepPushing kostenlos herunterzuladen.",
  en: 'On TikTok: Hit the 3 dots at the top right · Then tap "Open in Browser" to download KeepPushing for free.',
} as const;

export const inAppFullscreenCopy = {
  de: {
    brand: "KeepPushing",
    step1: "Tippe oben rechts auf die 3 Punkte",
    step2: "Wähle „Im Browser öffnen“",
  },
  en: {
    brand: "KeepPushing",
    step1: "Tap the 3 dots at the top right",
    step2: 'Select "Open in Browser"',
  },
} as const;

export const landingCopy = {
  de: {
    eyebrow: "Lauf-Coach",
    headline: "Trainiere smarter.\nBleib konstant.",
    subtitle:
      "KeepPushing passt dein Training täglich an deinen Körper an — kein starrer Plan, sondern echte Fortschritte.",
    cta: "App herunterladen",
    features: [
      {
        title: "Adaptives Training",
        description:
          "Dein Plan reagiert auf Ermüdung, Fortschritt und Erholung — Woche für Woche.",
      },
      {
        title: "Tägliche Einblicke",
        description:
          "Verstehe deine Fitness, Balance und Trainingsbelastung auf einen Blick.",
      },
      {
        title: "Persönliche Empfehlungen",
        description:
          "Konkrete Tipps, wann du pushen und wann du regenerieren solltest.",
      },
    ],
    footer: "Kostenlos starten • Nur iOS",
  },
  en: {
    eyebrow: "Running Coach",
    headline: "Train smarter.\nStay consistent.",
    subtitle:
      "KeepPushing adapts your training to your body every day — not a static plan, real progress.",
    cta: "Download App",
    features: [
      {
        title: "Adaptive training",
        description:
          "Your plan responds to fatigue, progress, and recovery — week after week.",
      },
      {
        title: "Daily insights",
        description:
          "Understand your fitness, balance, and training load at a glance.",
      },
      {
        title: "Personal recommendations",
        description:
          "Clear guidance on when to push and when to recover.",
      },
    ],
    footer: "Start for free • iOS only",
  },
} as const;

export async function detectGermany(): Promise<boolean> {
  try {
    const res = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error("geo lookup failed");
    const data = await res.json();
    return data.country_code === "DE";
  } catch {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Europe/Berlin";
  }
}
