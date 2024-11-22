import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const ContactCard = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 p-8 bg-white border-2 border-[#898D9F] shadow-lg rounded-lg">
            <div>
                <h3 className="text-2xl font-semibold uppercase">Contacto</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className='flex text-xl items-center justify-between gap-2 md:gap-3'>
                    <FaWhatsapp className="text-2xl"/>
                    <a target='_blank' href="https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola%2C+quisiera+que+me+contactes+para+obtener+m%C3%A1s+informaci%C3%B3n+sobre+algunas+de+tus+propiedades+disponibles&type=phone_number&app_absent=0">
                        +54 91158942180
                    </a>
                </div>
                <hr className="md:hidden"/>
                <div className='flex text-xl items-center justify-between gap-2 md:gap-3'>
                    <MdOutlineEmail className="text-2xl"/>
                    <a href="mailto:rfrola@remax.com.ar">rfrola@remax.com.ar</a>
                </div>
                <hr />
            </div>
            <div className="flex justify-center gap-4 text-3xl">
                <a href="https://www.instagram.com/rofrola.remax/profilecard/?igsh=MTNjZ3htem5mMTljbQ==">
                    <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@rofrola.remax?_t=8rX61PVrxvL&_r=1">
                    <FaTiktok />
                </a>
            </div>
        </div>
    )
}

export default ContactCard;