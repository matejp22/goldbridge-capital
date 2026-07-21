"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected";

type GoogleAnalyticsApi = {
  gtag?: (...args: unknown[]) => void;
};

const STORAGE_KEY = "goldbridge-cookie-consent";
const CONSENT_CHANGE_EVENT = "goldbridge-consent-change";

export default function GoogleAnalytics() {
  const measurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    const disableKey = `ga-disable-${measurementId}`;

    const existingChoice =
      window.localStorage.getItem(STORAGE_KEY);

    const initiallyAccepted =
      existingChoice === "accepted";

    Reflect.set(
      window,
      disableKey,
      !initiallyAccepted
    );

    setIsAllowed(initiallyAccepted);

    function handleConsentChange(event: Event) {
      const customEvent =
        event as CustomEvent<ConsentChoice>;

      const accepted =
        customEvent.detail === "accepted";

      Reflect.set(
        window,
        disableKey,
        !accepted
      );

      const analyticsApi =
        window as unknown as GoogleAnalyticsApi;

      analyticsApi.gtag?.("consent", "update", {
        analytics_storage: accepted
          ? "granted"
          : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });

      if (!accepted) {
        removeGoogleAnalyticsCookies();
      }

      setIsAllowed(accepted);
    }

    window.addEventListener(
      CONSENT_CHANGE_EVENT,
      handleConsentChange
    );

    return () => {
      window.removeEventListener(
        CONSENT_CHANGE_EVENT,
        handleConsentChange
      );
    };
  }, [measurementId]);

  if (!measurementId || !isAllowed) {
    return null;
  }

  return (
    <>
      <Script
        id="goldbridge-google-analytics-initialization"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          window.gtag = window.gtag || function() {
            window.dataLayer.push(arguments);
          };

          window['ga-disable-${measurementId}'] = false;

          window.gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          window.gtag('js', new Date());
        `}
      </Script>

      <Script
        id="goldbridge-google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      <Script
        id="goldbridge-google-analytics-configuration"
        strategy="afterInteractive"
      >
        {`
          window.gtag('config', '${measurementId}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}

function removeGoogleAnalyticsCookies() {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const cookieName = cookie
      .split("=")[0]
      ?.trim();

    if (
      !cookieName ||
      !(
        cookieName === "_ga" ||
        cookieName.startsWith("_ga_") ||
        cookieName === "_gid" ||
        cookieName === "_gat"
      )
    ) {
      continue;
    }

    expireCookie(cookieName, "/");
    expireCookie(
      cookieName,
      "/",
      window.location.hostname
    );
    expireCookie(
      cookieName,
      "/",
      `.${window.location.hostname}`
    );
  }
}

function expireCookie(
  name: string,
  path: string,
  domain?: string
) {
  const domainPart = domain
    ? `; domain=${domain}`
    : "";

  document.cookie =
    `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ` +
    `path=${path}${domainPart}; SameSite=Lax`;
}