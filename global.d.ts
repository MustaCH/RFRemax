// Declaración global para evitar advertencias de TypeScript con window.gtag
export {};

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}
