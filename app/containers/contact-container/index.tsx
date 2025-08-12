import { ContactCard } from "@/app/components";
import { ContactButton } from "@/app/components";
import { contactItems } from "./constants";
import { FaCheck } from "react-icons/fa";

export const ContactContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20 px-8 md:p-20">
            <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-3xl lg:text-4xl font-semibold lg:text-center">¿Comprar, alquilar o vender?</h2>
                <p className="lg:text-center">¿Estás pensando en vender tu propiedad? ¿Buscas tu hogar ideal al mejor precio?<br />Te acompaño en cada paso para asegurar una proceso exitoso y sin complicaciones.</p>
                <div className="flex lg:flex-row flex-col gap-4 mt-8">
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-6 h-6 bg-[#4088e3] rounded-full">
                            <FaCheck className="text-white"/>
                        </div>
                        <p className="text-lg font-semibold">Asesoramiento personalizado</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-6 h-6 bg-[#4088e3] rounded-full">
                            <FaCheck className="text-white"/>
                        </div>
                        <p className="text-lg font-semibold">Valoración experta</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-6 h-6 bg-[#4088e3] rounded-full">
                            <FaCheck className="text-white"/>
                        </div>
                        <p className="text-lg font-semibold">Proceso transparente</p>
                    </div>
                </div>
            </div>
            <ContactCard/>
            <div className="flex items-center justify-evenly md:gap-4 w-96 mt-8">
                {contactItems.map((item, index) => (
                    <ContactButton key={index} name={item.name} value={item.value} url={item.url} Icon={item.icon} />
                ))}
            </div>
        </div>
    )
}

export default ContactContainer;