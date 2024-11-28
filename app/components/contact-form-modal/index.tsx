'use client';

import { handleForm, handleTemplate } from "@/app/action";
import { FC, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import TemplateForm from "../template-form";

interface ContactFormModalProps {
  onClose: () => void;
}

export const ContactFormModal: FC<ContactFormModalProps> = ({ onClose }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
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

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    try {
      await handleTemplate(formData);
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
        className="relative w-96 md:w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
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
            <h2 className="text-3xl font-semibold">Recibe información exclusiva</h2>
            <p className="text-xl">Ingresa tus datos</p>
          </div>
        )}
        {isFormSubmitted ? (
          <div className="flex flex-col h-80 justify-center items-center text-center">
            <FaCheck className="text-green-500 text-5xl" />
            <p className="text-3xl font-semibold">¡Email enviado!</p>
            <p className="text-xl">¡Muchas gracias! Pronto recibirás la información en tu bandeja de entrada</p>
          </div>
        ) : (
          <TemplateForm action={handleSubmit} isLoading={isLoading}/>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactFormModal;
