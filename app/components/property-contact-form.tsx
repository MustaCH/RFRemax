import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";

interface PropertyContactFormProps {
  propertyTitle: string;
}

const PropertyContactForm: FC<PropertyContactFormProps> = ({ propertyTitle }) => {

  const handleClick = () => {
    sendGTMEvent({
      event: "conversion",
      type: "whatsapp_click",
      send_to: "AW-17024068643/_bxECNvTnr0aEKPY2rU_",
      value: 1.0,
      currency: "ARS",
    });
  };

  return (
    <div className="w-full">
        <a href="https://api.whatsapp.com/send/?phone=%2B5491158942180&type=phone_number&app_absent=0" target="_blank" className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-80 transition-all bg-green-500 rounded-full py-2 px-4 w-full" onClick={handleClick}>
            <FaWhatsapp className="w-10 h-10 text-white"/>
            <p className="text-white font-semibold text-lg">CONTACTAME</p>
        </a>
    </div>
  );
};

export default PropertyContactForm;
