"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type GoogleAnalyticsPageViewProps = {
  measurementId: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsPageView({
  measurementId,
}: GoogleAnalyticsPageViewProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || !window.gtag) return;

    window.gtag("config", measurementId, {
      page_path: pathname,
    });
  }, [measurementId, pathname]);

  return null;
}
