// src/utils/analytics.ts
export const GA_TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Log specific custom events (e.g., Resume Download, Project Click, Contact Form Sent)
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== "undefined" && (window as any).gtag && GA_TRACKING_ID) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
