'use client'

import { FaWhatsapp } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";
import Head from "next/head";

interface Props {
  params: {
    type: string;
  };
}

const OperationPage = ({ params }: Props) => {
  const { type } = params;

  const handleClick = () => {
    sendGTMEvent({
      event: "conversion",
      type: "whatsapp_home_click",
      send_to: "AW-17024068643/_bxECNvTnr0aEKPY2rU_",
      value: 1.0,
      currency: "ARS",
    });
  };

  const pageTitle = `¿Querés ${type} tu propiedad con un agente experto?`;
  const pageDescription = "Asegurá el éxito y evitá complicaciones, contactame hoy para empezar el proceso.";

  return (
    <>
      <Head>
        <title>{`${pageTitle} - Romina Frola`}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://rfrola.com.ar/quiero/${type}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: pageTitle,
              description: pageDescription,
              url: `https://rfrola.com.ar/quiero/${type}`,
              author: {
                '@type': 'Person',
                name: 'Romina Frola',
              },
              publisher: {
                '@type': 'Organization',
                name: 'RE/MAX Time',
              },
            }),
          }}
        />
      </Head>
      <main className="h-full lg:grid lg:grid-cols-2 mt-2 p-6 md:p-16 bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1745614361/Dise%C3%B1o_sin_t%C3%ADtulo_anjpdp_jpq0jr.webp)]">
      <div className="hidden lg:flex bg-[url(/bannerwelcome.jpeg)] bg-cover bg-[center_left_-12rem] h-full lg:h-auto rounded-tl-lg rounded-bl-lg">
      </div>
      <div className="flex flex-col gap-16 py-8 md:py-10 px-4 md:px-8 h-full lg:h-auto md:p-20 md:text-white bg-slate-200 md:bg-slate-800 rounded-lg md:rounded-tl-none md:rounded-bl-none md:rounded-tr-lg md:rounded-br-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">¿Querés <span className="text-[#4088e3]">{type}</span> tu propiedad con un agente experto?</h1> 
          <p className="text-lg">Asegurá el éxito y evitá complicaciones, contactame hoy para empezar el proceso, escribime a mí WhatsApp haciendo clic acá:</p>
          <div className="w-full mt-6">
            <a href={`https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola,%20quiero%20${type}%20mi%20propiedad&type=phone_number&app_absent=0`} target="_blank" className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-all bg-green-500 rounded-full py-2 px-4 w-full" onClick={handleClick}>
                <FaWhatsapp className="w-10 h-10 text-white"/>
                <p className="text-white font-semibold text-lg">CONTACTAME</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-evenly items-center">
            <div className="md:hidden rounded-full border-4 border-white bg-cover bg-center shadow-lg bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1745614226/whoami2_kqbnke.webp)] w-72 h-72">
            </div>
            <div className="flex flex-col gap-4 bg-white md:text-slate-800 rounded-lg p-8 w-full shadow-lg">
                <div className="border-b border-b-[#4088e3] pb-2">
                    <h3 className="text-2xl font-semibold">¿Quien soy?</h3>
                </div>
                <p className="text-sm">
                    Soy Romina Frola, asesora inmobiliaria en RE/MAX Time, especializada en ofrecer un servicio personalizado y 
                    transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.<br/><br/>
                    Mi pasión por el rubro nació de mi interés en ayudar a las personas a encontrar su hogar perfecto, 
                    brindando un servicio que combina ética, compromiso y dedicación. Como Personal Shopper Inmobiliario, 
                    me encargo de realizar búsquedas específicas, asegurando una experiencia segura y sin complicaciones.<br/><br/>
                    Como emprendedora, me definen la perseverancia y el deseo constante de superarme. Mi misión es crecer 
                    profesionalmente, fidelizar a mis clientes y ser reconocida por la excelencia en mi trabajo, construyendo 
                    relaciones basadas en la confianza y el respeto.
                </p>
            </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default OperationPage;
