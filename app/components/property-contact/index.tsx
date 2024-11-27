import { IProjectType } from "@/app/types";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

interface PropertyConctactProps {
    project?: IProjectType;
}

export const PropertyConctact: FC<PropertyConctactProps> = ({project}) => {
    return (
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center bg-white border border-[#712536] p-8 rounded-lg h-fit">
        <div className="rounded-full border-2 border-[#B0BBC5] bg-[length:11rem_17rem] bg-center shadow-lg bg-[url(https://res.cloudinary.com/dfuru6l6d/image/upload/v1732294268/Romina-04_fpifqe.jpg)] w-20 h-20 md:w-20 md:h-20">
        </div>
        <div>
          <h3 className="text-xl font-semibold">Consulta por ésta propiedad</h3>
          <p>Romina Frola | Agente Inmobiliario</p>
        </div>
        <div className="text-3xl flex gap-4 items-center">
          <a target="_blank" href={`https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola%2C+quisiera+que+me+contactes+para+obtener+m%C3%A1s+informaci%C3%B3n+sobre+${project?.title}&type=phone_number&app_absent=0`}>
            <FaWhatsapp/>
          </a>
          <a href={`mailto:rfrola@remax.com.ar?Subject=Consulta%20por%20${project?.title}`}>
            <MdOutlineEmail/>
          </a>
          <a>
            <FiPhone href="tel:+5491150193079"/>
          </a>
        </div>
      </div>
    )
}

export default PropertyConctact;