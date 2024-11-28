
import { handleForm } from "@/app/action";
import { FC } from "react";

interface ContactFormModalProps {
    errors: boolean,
}

export const ContactFormModal: FC<ContactFormModalProps> = ({errors}) => {
    // if (!isOpen) return null;


    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          {/* Close Button */}
          {/* <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => {}}
          >
            &times;
          </button> */}
        <div className="relative flex flex-col gap-1 text-center mb-4">
            <h2 className="text-xl font-semibold">Contactame</h2>
            <p>Enviame tu mensaje</p>
        </div>
          <form action={handleForm} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="to_name"
              placeholder="Tu nombre"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono (Opcional)"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="content"
              placeholder="Escribí tu mensaje..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default ContactFormModal;