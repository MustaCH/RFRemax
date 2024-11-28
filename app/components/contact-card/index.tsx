'use client'

import { ContactButton } from "./contact-button";
import { contactItems } from "./constants";
import { handleForm } from "@/app/action";
import ContactForm from "../contact-form";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

export const ContactCard = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true)
        try {
          await handleForm(formData);
          setIsFormSubmitted(true);
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
          alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
        } finally {
            setIsLoading(false)
        }
      };

    return (
        <div className="relative flex flex-col justify-center items-center gap-8 p-4 md:p-8 w-full md:w-[60%] bg-white border-2 border-[#898D9F] shadow-lg rounded-lg">
            <div>
                <h3 className="text-2xl font-semibold uppercase">Contacto</h3>
                <hr className="border-[#712536]"/>
            </div>
            <div className="flex flex-col gap-8 w-full">
                <div className="grid grid-cols-4 gap-4 md:gap-4">
                    {contactItems.map((item, index) => (
                        <ContactButton key={index} name={item.name} value={item.value} url={item.url} Icon={item.icon} />
                    ))}
                </div>
                <hr />
                <div>
                   {isFormSubmitted &&
                    <div className="flex flex-col items-center justify-center mb-4">
                        <FaCheck className="text-green-500 text-3xl" />
                        <p className="text-xl font-semibold">Email enviado!</p>
                        <p className="text-sm">Pronto me pondré en contacto</p>
                    </div>
                    }
                    <ContactForm action={handleSubmit} isLoading={isLoading}/>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;