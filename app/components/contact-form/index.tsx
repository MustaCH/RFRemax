import { FC } from "react";

interface ContactFormProps {
    Action: (formData: FormData) => void;
}

export const ContactForm: FC<ContactFormProps> = ({Action}) => {
    return (
        <form action={Action} className="space-y-4">
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
    )
}

export default ContactForm;