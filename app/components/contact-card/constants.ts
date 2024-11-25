import { IconType } from "react-icons";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type ContactItemProp = {
    name: string,
    value: string,
    icon: IconType,
    url: string
}


export const contactItems: ContactItemProp[] = [
    {
        name: 'whatsapp',
        value: '+54 91158942180',
        url: 'https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola%2C+quisiera+que+me+contactes+para+obtener+m%C3%A1s+informaci%C3%B3n+sobre+algunas+de+tus+propiedades+disponibles&type=phone_number&app_absent=0',
        icon: FaWhatsapp,

    },
    {
        name: 'email',
        value: 'rfrola@remax.com.ar',
        url: 'mailto:rfrola@remax.com.ar?Subject=Consulta%20por%20inmueble',
        icon: MdOutlineEmail
    },
    {
        name: 'instagram',
        value: '@rofrola.remax',
        url: 'https://www.instagram.com/rofrola.remax/profilecard/?igsh=MTNjZ3htem5mMTljbQ==',
        icon: FaInstagram
    },
    {
        name: 'tikTok',
        value: 'rofrola.remax',
        url: 'https://www.tiktok.com/@rofrola.remax?_t=8rX61PVrxvL&_r=1',
        icon: FaTiktok
    }
]