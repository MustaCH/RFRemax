import { ContactButton } from "./contact-button";
import { contactItems } from "./constants";

export const ContactCard = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 p-8 w-96 md:w-56 bg-white border-2 border-[#898D9F] shadow-lg rounded-lg">
            <div>
                <h3 className="text-2xl font-semibold uppercase">Contacto</h3>
                <hr className="border-[#712536]"/>
            </div>
            <div className="flex flex-col gap-4">
                {contactItems.map((item, index) => (
                    <ContactButton key={index} name={item.name} value={item.value} url={item.url} Icon={item.icon} />
                ))}
            </div>
        </div>
    )
}

export default ContactCard;