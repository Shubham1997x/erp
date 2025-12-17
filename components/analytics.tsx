"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsConfig } from "@/lib/config";

// Google Analytics
function initializeGoogleAnalytics() {
  if (!analyticsConfig.googleAnalyticsId) return;

  // Load gtag script
  if (typeof window !== "undefined" && !window.gtag) {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analyticsConfig.googleAnalyticsId}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);
  }
}

// Plausible Analytics
function initializePlausible() {
  if (!analyticsConfig.plausibleDomain) return;

  if (typeof window !== "undefined" && !window.plausible) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = analyticsConfig.plausibleDomain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }
}

// Track page views
export function trackPageView(url: string) {
  // Google Analytics
  if (analyticsConfig.googleAnalyticsId && typeof window !== "undefined" && window.gtag) {
    window.gtag("config", analyticsConfig.googleAnalyticsId, {
      page_path: url,
    });
  }

  // Plausible
  if (analyticsConfig.plausibleDomain && typeof window !== "undefined" && window.plausible) {
    window.plausible("pageview", {
      url: url,
    });
  }
}

// Track custom events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  // Google Analytics
  if (analyticsConfig.googleAnalyticsId && typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }

  // Plausible
  if (analyticsConfig.plausibleDomain && typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, {
      props: eventParams,
    });
  }
}

// Analytics Provider Component
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize analytics on mount
    initializeGoogleAnalytics();
    initializePlausible();
  }, []);

  useEffect(() => {
    // Track page views on route change
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

// TypeScript declarations for window
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown>; url?: string }
    ) => void;
    dataLayer?: unknown[];
  }
}

