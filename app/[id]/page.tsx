'use client';

import { projects } from "@/app/constants";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { IProjectType } from "../types";
import { MdOutlineEmail} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { PropertyContact, PropertyInfo, PropertySpecs } from "../components";

export default function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<IProjectType | undefined>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const foundProject = projects.find((project) => params.id === project.id);
    setProject(foundProject);
  }, [params.id]);

  return (
    <main className="px-2 py-4 md:px-24 md:pt-4 md:pb-24">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4">
        <div className="flex flex-col gap-4">
          {project?.images && project.images.length > 0 ? (
            <div>
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true, type: 'fraction' }}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={20}
                slidesPerView={1}
                className="h-fit w-full"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-80 rounded-lg"
                    />
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
            <p>No hay imágenes disponibles para este proyecto.</p>
          )}          
          <div className="hidden md:flex bg-white border border-[#B0BBC5] p-8 rounded-lg h-36 md:h-72 overflow-hidden">
            <p className="w-full" dangerouslySetInnerHTML={{ __html: project?.description || '' }}/>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 bg-white border border-[#B0BBC5] p-8 rounded-lg h-fit">
            <PropertyInfo project={project}/>
            <PropertySpecs project={project}/>
          </div>
          <div className="flex md:hidden bg-white border border-[#B0BBC5] p-8 rounded-lg h-36 md:h-72 overflow-hidden">
            <p className="w-full" dangerouslySetInnerHTML={{ __html: project?.description || '' }}/>
          </div>
          <div>
            <PropertyContact project={project}/>
          </div>
        </div>
      </div>
    </main>
  );
}
