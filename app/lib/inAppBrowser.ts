export function shouldShowInAppHint(): boolean {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;

  // Explicit TikTok / Bytedance signatures
  if (
    /tiktok|musical_ly|trill_|bytedance|aweme|zhiliaoapp|appname\/musical_ly|appname\/trill/i.test(
      ua
    )
  ) {
    return true;
  }

  // Android in-app WebView (TikTok and similar)
  if (/Android/i.test(ua) && /; wv\)/.test(ua)) {
    return true;
  }

  // iOS: inside a WebView, not Safari / Chrome / Firefox
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  if (isIOS && /AppleWebKit/i.test(ua)) {
    const isStandaloneBrowser =
      (/Version\/[\d.]+/.test(ua) &&
        /Safari/i.test(ua) &&
        !/musical_ly|trill_|bytedance/i.test(ua)) ||
      /CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);

    if (!isStandaloneBrowser) {
      return true;
    }
  }

  return false;
}
