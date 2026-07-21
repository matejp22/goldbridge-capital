"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "goldbridge-cookie-consent";

export default function GoogleAnalytics() {
  const measurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const existingChoice =
      window.localStorage.getItem(STORAGE_KEY);

    if (existingChoice === "accepted") {
      setIsAllowed(true);
    }

    function handleConsentChange(event: Event) {
      const customEvent = event as CustomEvent<
        "accepted" | "rejected"
      >;

      setIsAllowed(customEvent.detail === "accepted");
    }

    window.addEventListener(
      "goldbridge-consent-change",
      handleConsentChange,
    );

    return () => {
      window.removeEventListener(
        "goldbridge-consent-change",
        handleConsentChange,
      );
    };
  }, []);

  if (!measurementId || !isAllowed) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      <Script
        id="goldbridge-google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });

          gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}