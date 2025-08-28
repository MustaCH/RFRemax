import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Footer } from "./components";
import WhatsappButton from "./components/whatsapp-button";
import { ModalProvider } from "./context";
import { GoogleTagManager } from '@next/third-parties/google'



const outfitFont = localFont({
  src: [
    { path: "./fonts/Outfit-Thin.ttf", weight: "100" },
    { path: "./fonts/Outfit-ExtraLight.ttf", weight: "200" },
    { path: "./fonts/Outfit-Light.ttf", weight: "300" },
    { path: "./fonts/Outfit-Regular.ttf", weight: "400" },
    { path: "./fonts/Outfit-Medium.ttf", weight: "500" },
    { path: "./fonts/Outfit-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Outfit-Bold.ttf", weight: "700" },
    { path: "./fonts/Outfit-ExtraBold.ttf", weight: "800" },
    { path: "./fonts/Outfit-Black.ttf", weight: "900" },
  ],
  variable: "--font-outfit", 
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Romina Frola - Agente Inmobiliario",
  description: "Soy Romina Frola, asesora inmobiliaria en RE/MAX Time, especializada en ofrecer un servicio personalizado y transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.",
  openGraph: {
    title: "Romina Frola - Agente Inmobiliario | RE/MAX Time",
    description: "Soy Romina Frola, asesora inmobiliaria en RE/MAX Time, especializada en ofrecer un servicio personalizado y transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.",
    url: "https://rominafrola.com/",
    type: "website",
    images: [
      {
        url: "https://rominafrola.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Romina Frola - Agente Inmobiliario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romina Frola - Agente Inmobiliario | RE/MAX Time",
    description: "Soy Romina Frola, asesora inmobiliaria en RE/MAX Time, especializada en ofrecer un servicio personalizado y transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.",
    images: ["https://rominafrola.com/og-default.jpg"],
  },
  verification: {
    google: "AH1EOHT5K_I5LdX9ojwoaHr7sc8IeGWY9iaK6KyaW9I",
  },
  alternates: {
    canonical: "https://rominafrola.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-K846RW3R" />
      {/* Google Ads */}
      <body className={`${outfitFont.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K846RW3R"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}>
          </iframe>
        </noscript>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}