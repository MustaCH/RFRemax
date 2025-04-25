import { HomeContainer } from "./containers";

export default function Home() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Romina Frola - Agente Inmobiliario',
              url: 'https://rfrola.com.ar/',
              logo: 'https://rfrola.com.ar/logo.png',
              description: 'Soy Romina Frola, asesora inmobiliaria en RE/MAX Time, especializada en ofrecer un servicio personalizado y transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.',
              sameAs: [
                'https://www.instagram.com/rominafrola.remax/',
                'https://www.facebook.com/rominafrola.remax/'
              ]
            })
          }}
        />
      </head>
      <main>
        <HomeContainer/>
      </main>
    </>
  );
}
