// Dynamically injected at build-time by Vite from package.json
export const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '2.4.0';
export const APP_VERSION_TAG = `v${APP_VERSION}`;
export const APP_SHORT_VERSION = `v${APP_VERSION.split('.').slice(0, 2).join('.')}`;
