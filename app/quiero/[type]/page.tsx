'use client'

import { sendGTMEvent } from "@next/third-parties/google";
import Head from "next/head";
import { useState } from "react";

interface Props {
  params: {
    type: string;
  };
}

const OperationPage = ({ params }: Props) => {
  const { type } = params;
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const WEBHOOK = "https://qiuadminplatform.space/webhook/rf-forms";

  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
  
    const form = e.currentTarget;
    const data = new FormData(form);
  
    // agrega el campo type al form
    data.append("type", type);
  
    // dispara el evento GTM
    sendGTMEvent({
      event: "conversion",
      type: "form_submit",
      formType: type, // para distinguir qué tipo de form fue
      send_to: "AW-17024068643/_bxECNvTnr0aEKPY2rU_",
      value: 1.0,
      currency: "ARS",
    });
  
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        body: data,
      });
  
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      form.reset();
      // --- Añadir query param a la URL sin recargar ---
      const url = new URL(window.location.href);
      url.searchParams.set("conv", "form_ok"); // <--- cámbialo si querés
      window.history.replaceState({}, "", url.toString());

    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }
  

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
                name: 'RE/MAX Desafío',
              },
            }),
          }}
        />
      </Head>
      <main className="h-full lg:grid lg:grid-cols-2 mt-2 p-6 md:p-16 bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1745614361/Dise%C3%B1o_sin_t%C3%ADtulo_anjpdp_jpq0jr.webp)]">
      <div className="hidden lg:flex bg-[url(/bannerwelcome.jpeg)] bg-cover bg-[center_left_-12rem] h-full lg:h-auto rounded-tl-lg rounded-bl-lg">
      </div>
      <div className="flex flex-col gap-8 py-8 md:py-10 px-4 md:px-8 h-full lg:h-auto md:p-20 md:text-white bg-slate-200 md:bg-slate-800 rounded-lg md:rounded-tl-none md:rounded-bl-none md:rounded-tr-lg md:rounded-br-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">¿Querés <span className="text-[#4088e3]">{type}</span> tu propiedad con un agente experto?</h1> 
          <p className="text-lg">Asegurá el éxito y evitá complicaciones, contactame hoy para empezar el proceso, escribime completando el formulario:</p>
          {/* <div className="w-full mt-6">
            <a href={`https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola,%20quiero%20${type}%20mi%20propiedad&type=phone_number&app_absent=0`} target="_blank" className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-all bg-green-500 rounded-full py-2 px-4 w-full" onClick={handleClick}>
                <FaWhatsapp className="w-10 h-10 text-white"/>
                <p className="text-white font-semibold text-lg">CONTACTAME</p>
            </a>
          </div> */}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="name">Nombre</label>
            <input required className="border border-slate-400 rounded-md p-2 text-black" type="text" name="name" id="name" placeholder="Tu nombre completo"/>
            <label htmlFor="phone">Telefono celular</label>
            <input required className="border border-slate-400 rounded-md p-2 text-black" type="tel" name="phone" id="phone" placeholder="Cómo figura en whatsapp"/>
            <label htmlFor="email">Email</label>
            <input required className="border border-slate-400 rounded-md p-2 text-black" type="email" name="email" id="email" placeholder="Tu mejor dirección de email"/>
            <div className="flex gap-4">
              <div>
                <label htmlFor="neighborhood">Barrio de la propiedad</label>
                <input required className="border border-slate-400 rounded-md p-2 text-black" type="text" name="neighborhood" id="neighborhood" />
              </div>
              <div>
                <label htmlFor="rooms">Cantidad de ambientes</label>
                <input required className="border border-slate-400 rounded-md p-2 text-black" type="number" name="rooms" id="rooms" />
              </div>
            </div>
            <label htmlFor="message">Mensaje</label>
            <textarea className="border border-slate-400 rounded-md p-2 text-black" name="message" id="message"></textarea>
            <button
              type="submit"
              disabled={status==="sending"}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg"
            >
              {status==="sending" ? "Enviando..." : "Enviar"}
            </button>

            {status==="ok" && (
              <p className="text-green-400 mt-2">¡Gracias! Te responderé a la brevedad.</p>
            )}
            {status==="error" && (
              <p className="text-red-400 mt-2">Hubo un problema. Probá de nuevo.</p>
            )}
          </form>
        </div>
        {/* <div className="flex flex-col gap-8 justify-evenly items-center">
            <div className="md:hidden rounded-full border-4 border-white bg-cover bg-center shadow-lg bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1745614226/whoami2_kqbnke.webp)] w-72 h-72">
            </div>
            <div className="flex flex-col gap-4 bg-white md:text-slate-800 rounded-lg p-8 w-full shadow-lg">
                <div className="border-b border-b-[#4088e3] pb-2">
                    <h3 className="text-2xl font-semibold">¿Quien soy?</h3>
                </div>
                <p className="text-sm">
                    Soy Romina Frola, asesora inmobiliaria en RE/MAX Desafío, especializada en ofrecer un servicio personalizado y 
                    transparente que acompaña a cada cliente en su camino hacia la compra, venta o alquiler de su propiedad ideal.<br/><br/>
                    Mi pasión por el rubro nació de mi interés en ayudar a las personas a encontrar su hogar perfecto, 
                    brindando un servicio que combina ética, compromiso y dedicación. Como Personal Shopper Inmobiliario, 
                    me encargo de realizar búsquedas específicas, asegurando una experiencia segura y sin complicaciones.<br/><br/>
                    Como emprendedora, me definen la perseverancia y el deseo constante de superarme. Mi misión es crecer 
                    profesionalmente, fidelizar a mis clientes y ser reconocida por la excelencia en mi trabajo, construyendo 
                    relaciones basadas en la confianza y el respeto.
                </p>
            </div>
        </div> */}
      </div>
    </main>
    </>
  );
};

export default OperationPage;
