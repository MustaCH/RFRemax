"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Head from "next/head";
import { useState } from "react";
import { FaCheck, FaHome, FaSearch } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import barrios_caba from "../barrios.json";
import Image from "next/image";

interface Props {
  params: {
    type: string;
  };
}

const OperationPage = ({ params }: Props) => {
  const { type } = params;
  const [status, setStatus] = useState<
    "idle" | "sending" | "ok" | "error" | "wrong"
  >("idle");
  const barrios = barrios_caba.barrios_caba;
  const WEBHOOK = "https://qiuadminplatform.space/webhook/rf-forms";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const neighborhood = data.get("neighborhood")?.toString() || "";

    // 🔒 Validación: verificar que el barrio exista
    if (!barrios.includes(neighborhood)) {
      setStatus("wrong");
      return; // corta el envío
    }

    setStatus("sending");

    data.append("type", type);

    sendGTMEvent({
      event: "conversion",
      type: "form_submit",
      formType: type,
      send_to: "AW-17024068643/NRUcCIyYyakbEKPY2rU_",
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
      const url = new URL(window.location.href);
      url.searchParams.set("conv", "form_ok");
      window.history.replaceState({}, "", url.toString());
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const pageTitle = `¿Querés ${type} tu propiedad con un agente experto?`;
  const pageDescription =
    "Asegurá el éxito y evitá complicaciones, contactame hoy para empezar el proceso.";

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
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: pageTitle,
              description: pageDescription,
              url: `https://rfrola.com.ar/quiero/${type}`,
              author: {
                "@type": "Person",
                name: "Romina Frola",
              },
              publisher: {
                "@type": "Organization",
                name: "RE/MAX Desafío",
              },
            }),
          }}
        />
      </Head>
      <main className="h-full p-6 md:p-16 bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1759952325/foto_ba_global_-fotor-20251008163732_nzf3my.png)] bg-cover bg-center bg-no-repeat">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 text-center">
            <div className="flex flex-col gap-6 max-w-2xl mx-auto">
              <h2 className="text-lg text-slate-800">
                ¿Querés vender una propiedad en CABA?
              </h2>
              <h1 className="text-3xl lg:text-4xl font-semibold text-slate-800 text-shadow-sm">
                Conocé el valor real de tu propiedad, completamente{" "}
                <span className="text-green-500 uppercase">gratis</span>
              </h1>
              <p className="text-lg text-slate-800 text-shadow-lg">{`Llenando el formulario más abajo en esta página vas a recibir un Análisis Competitivo de Mercado
               (ACM) sin costo, del inmueble que querés ${type}.`}</p>
              <div className="flex justify-center w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#4088e3] p-2 w-fit">
                      <FaCheck className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 text-shadow-lg">
                      Al mejor valor
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#4088e3] p-2 w-fit">
                      <FaCheck className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 text-shadow-lg">
                      En tiempo récord
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#4088e3] p-2 w-fit">
                      <FaCheck className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 text-shadow-lg">
                      Sin complicaciones
                    </h3>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 max-w-xl mx-auto gap-4">
                <a
                  href="#form"
                  className="text-sm md:text-lg bg-green-500 hover:bg-green-600 duration-150 text-white font-semibold px-6 py-4 rounded-lg shadow-lg"
                >
                  Recibir mi ACM gratuito
                </a>
                <a
                  href="#whoami"
                  className="text-sm md:text-lg bg-blue-500 hover:bg-blue-600 duration-150 text-white font-semibold px-6 py-4 rounded-lg shadow-lg"
                >
                  Más información
                </a>
              </div>
            </div>
            <article className="flex flex-col gap-6 mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white text-shadow-lg">
                Proceso transparente 360°
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-slate-200 p-4 rounded-full shadow-lg">
                    <FaSearch className="text-4xl text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">
                    Valoración
                  </h3>
                  <p className="text-white text-md">
                    La valoración experta de tu propiedad con un asesoramiento
                    inmobiliario completo hacen que el proceso sea mucho más
                    fácil
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-slate-200 p-4 rounded-full shadow-lg">
                    <FaHome className="text-4xl text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">
                    Producción
                  </h3>
                  <p className="text-white text-md">
                    Recopilamos toda la información necesaria sobre tu propiedad
                    y generamos el contenido para su publicación y difusión
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-slate-200 p-4 rounded-full shadow-lg">
                    <FaHandshakeSimple className="text-4xl text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">Venta</h3>
                  <p className="text-white text-md">
                    Encontramos al comprador ideal, negociamos según tu objetivo
                    y concretamos la venta de tu propiedad
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="whoami" className="mb-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-8 justify-evenly items-center">
            <div className="rounded-full border-4 border-white bg-cover bg-center shadow-lg bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1745614226/whoami2_kqbnke.webp)] w-72 h-72 md:w-96 md:h-96"></div>
            <div className="flex flex-col gap-4 bg-white md:text-slate-800 rounded-lg p-8 w-full shadow-lg md:w-1/2 overflow-hidden">
              <div className="border-b border-b-[#4088e3] pb-2">
                <h3 className="text-2xl font-semibold">¿Quien soy?</h3>
              </div>
              <p className="text-sm">
                Soy Romina Frola, asesora inmobiliaria en RE/MAX Desafío,
                especializada en ofrecer un servicio personalizado y
                transparente que acompaña a cada cliente en su camino hacia la
                compra, venta o alquiler de su propiedad ideal.
                <br />
                <br />
                Mi pasión por el rubro nació de mi interés en ayudar a las
                personas a encontrar su hogar perfecto, brindando un servicio
                que combina ética, compromiso y dedicación. Como Personal
                Shopper Inmobiliario, me encargo de realizar búsquedas
                específicas, asegurando una experiencia segura y sin
                complicaciones.
                <br />
                <br />
                Como emprendedora, me definen la perseverancia y el deseo
                constante de superarme. Mi misión es crecer profesionalmente,
                fidelizar a mis clientes y ser reconocida por la excelencia en
                mi trabajo, construyendo relaciones basadas en la confianza y el
                respeto.
              </p>
            </div>
          </div>
        </section>
        <section className="h-full max-w-6xl mx-auto lg:grid lg:grid-cols-2 mt-2">
          <div className="hidden lg:flex bg-[url(/bannerwelcome.jpeg)] bg-cover bg-[center_left_-12rem] h-full lg:h-auto rounded-tl-lg rounded-bl-lg"></div>
          <div className="flex flex-col gap-8 py-8 md:py-10 px-4 md:px-8 h-full lg:h-auto md:p-20 md:text-white bg-slate-200 md:bg-slate-800 rounded-lg md:rounded-tl-none md:rounded-bl-none md:rounded-tr-lg md:rounded-br-lg">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl lg:text-4xl font-semibold">
                Conocé el Valor Real de Tu Propiedad antes de{" "}
                <span className="text-[#4088e3]">{type}la</span>
              </h1>
              <p className="text-lg">
                {`Empezá el proceso de ${type} tu propiedad con la mayor ventaja: un Análisis Competitivo del Mercado completo de la mano de Romina Frola, rellena este formulario ahora para reclamar tu ACM gratis:`}
              </p>
              {/* <div className="w-full mt-6">
              <a href={`https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola,%20quiero%20${type}%20mi%20propiedad&type=phone_number&app_absent=0`} target="_blank" className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-all bg-green-500 rounded-full py-2 px-4 w-full" onClick={handleClick}>
                  <FaWhatsapp className="w-10 h-10 text-white"/>
                  <p className="text-white font-semibold text-lg">CONTACTAME</p>
              </a>
            </div> */}
            </div>
            <section id="form">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="name">Nombre</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2 text-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tu nombre completo"
                />
                <label htmlFor="phone">Telefono celular</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2 text-black"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Cómo figura en whatsapp"
                />
                <label htmlFor="email">Email</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2 text-black"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Tu mejor dirección de email"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="neighborhood">Barrio de la propiedad</label>
                    <input
                      required
                      className="border border-slate-400 rounded-md p-2 text-black w-full"
                      list="barrios-caba"
                      id="neighborhood"
                      name="neighborhood"
                      placeholder="Selecciona una opción"
                    />
                    <datalist id="barrios-caba">
                      {barrios.map((b) => (
                        <option key={b} value={b} />
                      ))}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="rooms">Cantidad de ambientes</label>
                    <input
                      required
                      className="border border-slate-400 rounded-md p-2 text-black w-full"
                      type="number"
                      name="rooms"
                      id="rooms"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg"
                >
                  {status === "sending" ? "Enviando..." : "Enviar"}
                </button>

                {status === "ok" && (
                  <p className="text-green-400 mt-2">
                    ¡Gracias! Te responderemos a la brevedad.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-2">
                    Hubo un problema. Probá de nuevo.
                  </p>
                )}
                {status === "wrong" && (
                  <p className="text-red-400 mt-2">
                    Por favor seleccioná un barrio válido de la lista.
                  </p>
                )}
              </form>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default OperationPage;
