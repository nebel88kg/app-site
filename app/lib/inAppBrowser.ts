export function isTikTokInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  return /tiktok|musical_ly|bytedancewebview|aweme/i.test(navigator.userAgent);
}
