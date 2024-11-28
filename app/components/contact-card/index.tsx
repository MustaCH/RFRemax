'use client'

import { ContactButton } from "./contact-button";
import { contactItems } from "./constants";
import { handleForm } from "@/app/action";
import ContactForm from "../contact-form";

export const ContactCard = () => {
    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = async () => {
        try {
          await handleForm;
        //   setIsFormSubmitted(true);
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
          alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
        } 
      };

    return (
        <div className="flex flex-col justify-center items-center gap-8 p-8 w-full md:w-[60%] bg-white border-2 border-[#898D9F] shadow-lg rounded-lg">
            <div>
                <h3 className="text-2xl font-semibold uppercase">Contacto</h3>
                <hr className="border-[#712536]"/>
            </div>
            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-4 gap-4">
                    {contactItems.map((item, index) => (
                        <ContactButton key={index} name={item.name} value={item.value} url={item.url} Icon={item.icon} />
                    ))}
                </div>
                <hr />
                <ContactForm Action={handleSubmit}/>
            </div>
        </div>
    )
}

export default ContactCard;