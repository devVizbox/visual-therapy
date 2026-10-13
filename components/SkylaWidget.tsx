"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    SkylaWidgetConfig?: {
      title?: string;
      buttonIcon?: string;
    };
    SkylaWidget?: {
      create: (config: Window["SkylaWidgetConfig"]) => void;
    };
  }
}

function removeSkylaWidget() {
  document
    .querySelectorAll(".skyla-widget-container, .skyla-widget-backdrop, #skyla-widget-styles")
    .forEach((node) => node.remove());
}

export default function SkylaWidget() {
  useEffect(() => {
    if (window.SkylaWidget?.create && window.SkylaWidgetConfig && !document.querySelector(".skyla-widget-container")) {
      window.SkylaWidget.create(window.SkylaWidgetConfig);
    }

    return removeSkylaWidget;
  }, []);

  return (
    <>
      <style>{`
        body:has(.skyla-widget-backdrop-open) .skyla-widget-container {
          visibility: hidden;
          pointer-events: none;
        }
      `}</style>
      <Script
        id="skyla-widget-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.SkylaWidgetConfig = window.SkylaWidgetConfig || { title: 'Hey Skyla', buttonIcon: '💬' };`,
        }}
      />
      <Script
        src="https://aichatbox-skylar.onrender.com/static/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
