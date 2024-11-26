import { projects } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules";

export default async function PropertyPage({
  params,
}: {
  params: { property: string };
}) {
  const project = projects[0]; 

  return (
    <main className="px-24 pt-12">
      <h1 className="text-xl md:text-3xl">{project.title}</h1>
      
      <div className="mt-8">
        <Swiper
          modules={[Navigation]} 
          navigation 
          spaceBetween={20} 
          slidesPerView={1}
        >
          {project.images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
