'use client';

import { projects } from "@/app/constants";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { IProjectType } from "../types";
import { PriceFormatter } from "../utils";
import { PiHouseSimpleBold, PiHouseSimpleDuotone, PiHouseSimpleFill, PiOfficeChairBold, PiToiletBold } from "react-icons/pi";
import { BiArea, BiBuilding, BiSolidCarGarage } from "react-icons/bi";
import { MdMeetingRoom, MdOutlineCalendarMonth, MdOutlineKingBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import Image from "next/image";

export default function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<IProjectType | undefined>();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    const foundProject = projects.find((project) => params.id === project.id);
    setProject(foundProject);
  }, [params.id]);

  return (
    <main className="px-24 py-12">
      <h1 className="text-xl md:text-3xl">{project?.title}</h1>

      <div className="mt-8 grid grid-cols-2 justify-evenly gap-12">
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
                  <Image
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
          <div className="flex flex-col gap-8 bg-white border border-[#B0BBC5] p-8 rounded-lg">
            <div>
              <div className="text-sm border border-[#B0BBC5] p-1 w-fit rounded-lg mb-2">
                {project?.operation.type === 'SALE' ? 'Venta' : project?.operation.type === 'RENT' ? 'Alquiler' : ''}
              </div>
              <PriceFormatter className="text-4xl" value={project?.price}/>
              {project?.expenses && <PriceFormatter className="text-sm" value={project?.expenses} title="Expensas:"/>}
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="text-2xl underline decoration-[#712536] underline-offset-8">Características</h3>
                <hr />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <PiHouseSimpleBold className="text-2xl"/>
                    <p className="font-bold">
                      {project?.specifications?.surface?.surfaceTotal} m<sup>2</sup> totales
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiHouseSimpleFill className="text-2xl"/>
                    <p className="font-bold">
                      {project?.specifications?.surface?.surfaceCover} m<sup>2</sup> cubiertos
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiHouseSimpleDuotone className="text-2xl"/>
                    <p className="font-bold">
                      {project?.specifications?.surface?.surfaceSemicover} m<sup>2</sup> semicubiertos
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiArea className="text-2xl"/>
                    <p className="font-bold">
                      {project?.specifications?.surface?.surfaceLand} m<sup>2</sup> terreno
                    </p>
                  </div>
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-4">
                  {project?.specifications?.rooms && 
                    <div className="flex items-center gap-2">
                        <MdMeetingRoom className="text-2xl" />
                        <p className="font-bold">
                          {project?.specifications?.rooms} ambientes
                        </p>
                    </div>
                  }
                  {project?.specifications?.bedrooms &&
                    <div className="flex items-center gap-2">
                      <MdOutlineKingBed className="text-2xl"/>
                      <p className="font-bold">
                        {project?.specifications?.bedrooms} habitaciones
                      </p>
                    </div>
                  }
                  {project?.specifications?.bathrooms &&
                    <div className="flex items-center gap-2">
                      <TbBath className="text-2xl"/>
                      <p className="font-bold">
                        {project?.specifications?.bathrooms} baños
                      </p>
                    </div>
                  }
                  {project?.specifications?.toilets &&
                    <div className="flex items-center gap-2">
                      <PiToiletBold className="text-2xl"/>
                      <p className="font-bold">
                        {project?.specifications?.toilets} toilets
                      </p>
                    </div>
                  }
                  {project?.specifications?.garage &&
                    <div className="flex items-center gap-2">
                      <BiSolidCarGarage className="text-2xl"/>
                      <p className="font-bold">
                        {project?.specifications?.garage} cocheras
                      </p>
                    </div>
                  }
                  {project?.specifications?.age !== 0 &&
                    <div className="flex items-center gap-2">
                      <MdOutlineCalendarMonth className="text-2xl"/>
                      <p className="font-bold">
                        {project?.specifications?.age} años de antigüedad
                      </p>
                    </div>
                  }
                  {project?.specifications?.floor &&
                    <div className="flex items-center gap-2">
                      <BiBuilding className="text-2xl"/>
                      <p className="font-bold">
                        Pisos de la propiedad: {project?.specifications?.floor}
                      </p>
                    </div>
                    }
                    { project?.specifications?.professional &&
                      <div className="flex items-center gap-2">
                      <PiOfficeChairBold className="text-2xl"/>
                      <p className="font-bold">
                        Apto profesional
                      </p>
                    </div>
                    }
                </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#B0BBC5] p-8 rounded-lg">
          <p className="w-full">{project?.description}</p>
        </div>
      </div>
    </main>
  );
}
