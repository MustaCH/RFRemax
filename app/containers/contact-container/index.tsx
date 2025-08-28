import { ContactButton } from "@/app/components";
import { contactItems } from "./constants";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

export const ContactContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20 px-8 md:p-20">
            <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-3xl lg:text-4xl font-semibold lg:text-center">¿Estás buscando comprar, alquilar o vender una propiedad?</h2>
                <p className="lg:text-center">Te acompaño en cada paso para asegurar una proceso exitoso y sin complicaciones,<br />contactame hoy enviandome un mensaje por WhatsApp.</p>
                <div className="flex lg:flex-row flex-col justify-center gap-4 mt-8">
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
            <div className="w-full lg:w-96">
                <a href="https://api.whatsapp.com/send/?phone=%2B5491158942180&type=phone_number&app_absent=0" target="_blank" className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-all bg-green-500 rounded-full py-2 px-4 w-full">
                    <FaWhatsapp className="w-10 h-10 text-white"/>
                    <p className="text-white font-semibold text-lg">CONTACTAME</p>
                </a>
            </div>
            {/* <ContactCard/> */}
            <div className="flex items-center justify-evenly md:gap-2 gap-0 w-96 mt-4">
                {contactItems.map((item, index) => (
                    <ContactButton key={index} name={item.name} value={item.value} url={item.url} Icon={item.icon} />
                ))}
            </div>
        </div>
    )
}

export default ContactContainer;