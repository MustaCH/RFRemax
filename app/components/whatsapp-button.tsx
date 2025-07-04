"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";

const whatsappNumber = "+5491158942180";
const defaultMessage = encodeURIComponent("¡Hola! Quisiera hacer una consulta por una propiedad que vi en tu web.");

const WhatsappButton: React.FC = () => {
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
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] rounded-full w-15 h-15 p-2 shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#20ba5a] transition-colors"
      onClick={handleClick}
    >
      <FaWhatsapp size={42} color="white" />
    </a>
  );
};

export default WhatsappButton;
