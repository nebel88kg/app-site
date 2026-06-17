import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KeepPushing — Download",
  description: "Download KeepPushing for iOS — your running coach for consistent progress.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
