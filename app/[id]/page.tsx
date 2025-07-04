"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { IProjectType } from "../types";
import { PropertyContact, PropertyInfo, PropertySpecs } from "../components";
import PropertyContactForm from "../components/property-contact-form";
import { handleForm } from "../action";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { getPropertyById } from "../services";
import Head from "next/head";
import { Ring } from "ldrs/react";
import 'ldrs/react/Ring.css'


export default function PropertyPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<IProjectType | undefined>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [video, setVideo] = useState("")


  useEffect(() => {
    if (project) {
      if (project.title === "Nave a estrenar en Plaza Industrial Escobar") {
        setVideo("https://www.youtube.com/embed/JrLBixR2P2k?si=7VlkOn_5jrRy-7Xh")
      } else if (project.title === "Venta Local Comercial en Puerto Madero") {
        setVideo("https://www.youtube.com/embed/vOD5MrtRWsw?si=3Tcyrc8BuKu9SVs2")
      } else if (project.title === "Departamento 5 Amb. Barrio Parque con cochera") {
        setVideo("https://www.youtube.com/embed/VgLrDIOSGU0?si=LNns-NtzJ4M_XuZ6")
      } else if (project.title === "Venta Depto. 3 Amb. Puerto Madero - 3 Cocheras") {
        setVideo("https://www.youtube.com/embed/ysSR7Sf3J5w?si=-4up3PvDQkkV728U")
      } else {
        setVideo("")
      }
    }
  }, [project]);


  useEffect(() => {
    const loadProperty = async () => {
      setLoading(true);
      try {
        const property = await getPropertyById(params.id);
        setProject(property || undefined);
      } catch (error) {
        console.error("Error loading property:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [params.id]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Ring color="#4088e3"/>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Propiedad no encontrada</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://rfrola.com.ar/${params.id}`} />
        {project && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Residence',
                name: project.title,
                description: project.description?.replace(/<[^>]+>/g, ''),
                url: `https://rfrola.com.ar/${project.id}`,
                image: project.images && project.images.length > 0 ? project.images : undefined,
                address: project.location ? {
                  '@type': 'PostalAddress',
                  streetAddress: project.location.street || '',
                  addressLocality: project.location.city || '',
                  addressRegion: project.location.province || '',
                  addressCountry: 'AR',
                } : undefined,
                offers: {
                  '@type': 'Offer',
                  price: project.price?.price,
                  priceCurrency: project.price?.currency,
                  availability: project.availability ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
                  url: `https://rfrola.com.ar/${project.id}`,
                },
              }),
            }}
          />
        )}
      </Head>
      <main className="px-2 py-4 md:px-24 md:pt-4 md:pb-24">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="md:hidden text-3xl font-semibold">{project?.title}</h1>
          </div>
          {project?.images && project.images.length > 0 ? (
            <div>
              <Swiper
                modules={[Navigation, Pagination, Thumbs, Zoom]}
                navigation
                pagination={{ clickable: true, type: "fraction" }}
                thumbs={{ swiper: thumbsSwiper }}
                zoom
                spaceBetween={20}
                slidesPerView={1}
                className="h-[500px] w-full"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-zoom-container h-full w-full">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full rounded-lg object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                className="mt-4"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-16 rounded-md cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[500px] bg-gray-100 rounded-lg">
              <p>No hay imágenes disponibles</p>
            </div>
          )}
          <div className="hidden md:inline bg-white border border-[#B0BBC5] shadow-md p-8 rounded-lg h-fit">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-[#712536] underline-offset-8">
              Descripción
            </h2>
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                isExpanded ? "max-h-full" : "max-h-48"
              }`}
            >
              <p
                className="w-full"
                dangerouslySetInnerHTML={{ __html: project?.description || "" }}
              />
            </div>
            <button
              onClick={toggleExpand}
              className="flex justify-center items-center gap-1 h-8 text-center z-50 w-full bg-gradient-to-t from-white to-transparent text-blue-500 hover:underline"
            >
              {isExpanded ? "Ver menos" : "Ver más"}{" "}
              {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>

          {/* Formulario de contacto para propiedad */}
          <div className="bg-white border border-[#B0BBC5] shadow-md p-8 rounded-lg h-fit">
            <h2 className="text-2xl font-semibold mb-4">
              Consultar por esta propiedad
            </h2>
            <PropertyContactForm
              propertyTitle={project?.title || "Propiedad"}
              isLoading={isSending}
              onSend={async (formData) => {
                setIsSending(true);
                await handleForm(formData);
                setIsSending(false);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 bg-white border border-[#B0BBC5] shadow-md p-8 rounded-lg h-fit">
            <PropertyInfo project={project} />
            <PropertySpecs project={project} />
          </div>
          {video && (
            <iframe className="rounded-lg" width="100%" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          )}
          <div className="inline md:hidden bg-white border border-[#B0BBC5] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-[#712536] underline-offset-8">
              Descripción
            </h2>
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                isExpanded ? "max-h-full" : "max-h-40"
              }`}
            >
              <p
                className="w-full"
                dangerouslySetInnerHTML={{ __html: project?.description || "" }}
              />
            </div>
            <button
              onClick={toggleExpand}
              className="flex justify-center items-center gap-1 h-8 text-center z-50 w-full bg-gradient-to-t from-white to-transparent text-blue-500 hover:underline"
            >
              {isExpanded ? "Ver menos" : "Ver más"}{" "}
              {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div>
            <PropertyContact project={project} />
          </div>
          <div className="flex flex-col gap-2 p-8 h-fit">
            <h4 className="text-2xl">Disclaimer</h4>
            <p className="text-sm">
              Corredor Matriculado Responsable José David Winer -CUCICBA 6346-
              CMCPSI 6433.
              <br /> Todas las propiedades que figuran en éste sitio web se
              encuentran a cargo de un profesional matriculado, la
              intermediación y la conclusión de las operaciones serán llevadas
              exclusivamente por él.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
