'use client';

import { handleForm } from "@/app/action";
import { FC, useState } from "react";
import ContactForm from "../contact-form";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

interface ContactFormModalProps {
  onClose: () => void;
}

export const ContactFormModal: FC<ContactFormModalProps> = ({ onClose }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [isExiting, setIsExiting] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      startExitAnimation();
    }
  };

  const startExitAnimation = () => {
    // setIsExiting(true);
    setTimeout(onClose, 300); 
  };

  const handleSubmit = async () => {
    try {
      await handleForm;
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setTimeout(() => {
        onClose();
      }, 3000); 
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={startExitAnimation}
          className="absolute top-2 right-4 text-xl text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        {!isFormSubmitted && (
          <div className="relative flex flex-col gap-1 text-center mb-4">
            <h2 className="text-3xl font-semibold">¿Tenés alguna consulta?</h2>
            <p className="text-xl">Enviame tu mensaje</p>
          </div>
        )}
        {isFormSubmitted ? (
          <div className="flex flex-col h-80 justify-center items-center text-center">
            <FaCheck className="text-green-500 text-5xl" />
            <p className="text-3xl font-semibold">¡Email enviado!</p>
            <p className="text-xl">¡Muchas gracias! Pronto me pondré en contacto</p>
          </div>
        ) : (
          <ContactForm Action={handleSubmit} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactFormModal;
