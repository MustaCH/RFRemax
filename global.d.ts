// Declaración global para evitar advertencias de TypeScript con window.gtag
export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
