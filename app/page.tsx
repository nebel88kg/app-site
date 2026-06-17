import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "KeepPushing — Running Coach",
  description:
    "KeepPushing adapts your training to your body every day — your running coach for consistent progress.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function HomePage() {
  return <LandingPageClient />;
}
