import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type ContactItemProp = {
    name: string,
    value: string,
    icon: IconType,
    url: string
}


export const contactItems: ContactItemProp[] = [
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
    }
]