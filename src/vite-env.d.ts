/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COUNTER_API_KEY: string;
  readonly VITE_COUNTER_WORKSPACE: string;
  readonly VITE_COUNTER_NAME: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: string;
