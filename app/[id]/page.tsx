'use client';

import { projects } from "@/app/constants";
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
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ring } from 'ldrs'

ring.register()

export default function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<IProjectType | undefined>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);


  useEffect(() => {
    const foundProject = projects.find((project) => params.id === project.id);
    setProject(foundProject);
  }, [params.id]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <main className="px-2 py-4 md:px-24 md:pt-4 md:pb-24">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4">
        <div className="flex flex-col gap-4">
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
              className="h-fit w-full"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full rounded-lg"
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
                    className="w-full h-[4rem] rounded-md cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          ) : (
            <l-ring
              size="40"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="black" 
            ></l-ring>
          )}        
          <div className="hidden md:inline bg-white border border-[#B0BBC5] shadow-md p-8 rounded-lg h-fit">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-[#712536] underline-offset-8">Descripción</h2>
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                isExpanded ? "max-h-full" : "max-h-48"
              }`}
            >
              <p
                className="w-full"
                dangerouslySetInnerHTML={{ __html: project?.description || '' }}
              />
            </div>
              <button
                onClick={toggleExpand}
                className="flex justify-center items-center gap-1 h-8 text-center z-50 w-full bg-gradient-to-t from-white to-transparent text-blue-500 hover:underline"
              >
                {isExpanded ? "Ver menos" : "Ver más"} {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 bg-white border border-[#B0BBC5] shadow-md p-8 rounded-lg h-fit">
            <PropertyInfo project={project}/>
            <PropertySpecs project={project}/>
          </div>
          <div className="inline md:hidden bg-white border border-[#B0BBC5] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-[#712536] underline-offset-8">Descripción</h2>
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                isExpanded ? "max-h-full" : "max-h-40"
              }`}
            >
              <p
                className="w-full"
                dangerouslySetInnerHTML={{ __html: project?.description || '' }}
              />
            </div>
              <button
                onClick={toggleExpand}
                className="flex justify-center items-center gap-1 h-8 text-center z-50 w-full bg-gradient-to-t from-white to-transparent text-blue-500 hover:underline"
              >
                {isExpanded ? "Ver menos" : "Ver más"}  {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />} 
              </button>
          </div>
          <div>
            <PropertyContact project={project}/>
          </div>
          <div className="flex flex-col gap-2 p-8 h-fit">
            <h4 className="text-2xl">Disclaimer</h4>
            <p className="text-sm">Corredor Matriculado Responsable José David Winer -CUCICBA 6346- CMCPSI 6433.<br/> Todas las propiedades que figuran en éste sitio web se encuentran a cargo de un profesional matriculado, la intermediación y la conclusión de las operaciones serán llevadas exclusivamente por él.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
