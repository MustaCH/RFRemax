import { navlinks } from '../navbar/constants'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center py-4 gap-6 bg-[#B0BBC5] px-6'>
            <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly items-center w-full'>
                <div>
                    <img className='w-24' src="logo.png" alt="logo-rf" />
                </div>
                <div>
                    <ul className='flex md:flex-col gap-4 md:gap-1'>
                        {navlinks.map((link, index) => (
                            <li key={index} className='uppercase text-xs md:text-sm'><a href={link.url}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className='flex md:flex-col gap-4 md:gap-1'>
                    <div className='flex items-center gap-2 md:gap-3'>
                        <FaWhatsapp />
                        <a className='underline' target='_blank' href="https://api.whatsapp.com/send/?phone=%2B5491158942180&text=Hola%2C+quisiera+que+me+contactes+para+obtener+m%C3%A1s+informaci%C3%B3n+sobre+algunas+de+tus+propiedades+disponibles&type=phone_number&app_absent=0">
                            +54 91158942180
                        </a>
                    </div>
                    <div className='flex items-center gap-2 md:gap-3'>
                        <MdOutlineEmail />
                        <a href="mailto:rfrola@remax.com.ar">rfrola@remax.com.ar</a>
                    </div>
                </div>
            </div>
            <p className='text-xs text-center md:text-sm'>Corredor Matriculado Responsable José David Winer -CUCICBA 6346- CMCPSI 6433.</p>
        </footer>
    )
}

export default Footer;