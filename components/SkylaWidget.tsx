"use client";

import Script from "next/script";

declare global {
  interface Window {
    SkylaWidgetConfig?: {
      title?: string;
      buttonIcon?: string;
    };
  }
}

export default function SkylaWidget() {
  return (
    <>
      <Script
        id="skyla-widget-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.SkylaWidgetConfig = { title: 'Hey Skyla', buttonIcon: '💬' };`,
        }}
      />
      <Script
        src="https://aichatbox-skylar.onrender.com/static/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
