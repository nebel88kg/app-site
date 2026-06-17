"use client";

import { useEffect } from "react";

const DEFAULT_TITLE = "KeepPushing — Running Coach";

type PageHeadProps = {
  title?: string;
};

export function PageHead({ title = DEFAULT_TITLE }: PageHeadProps) {
  useEffect(() => {
    document.title = title;

    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach((node) => node.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/icon.svg";
    link.type = "image/svg+xml";
    document.head.appendChild(link);
  }, [title]);

  return null;
}
