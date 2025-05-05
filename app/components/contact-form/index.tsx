import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ContactFormProps {
  action: (formData: FormData) => void;
  isLoading: boolean;
  showSubject?: boolean;
  showContent?: boolean;
}

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ContactForm: FC<ContactFormProps> = ({ action, isLoading, showSubject = true, showContent = true }) => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingresa un email válido")
      .required("El email es obligatorio"),
    to_name: Yup.string().required("El nombre es obligatorio"),
    phone: Yup.string(),
    ...(showSubject !== false && {
      subject: Yup.string().required("El asunto es obligatorio"),
    }),
    ...(showContent !== false && {
      content: Yup.string().required("El mensaje no puede estar vacío"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      to_name: "",
      phone: "",
      subject: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      await action(formData);
      setSuccess(true);
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17024068643/_bxECNvTnr0aEKPY2rU_',
          'value': 1.0,
          'currency': 'ARS'
        });
      }
      
      // Redirigir a la URL actual con parámetro de éxito
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('conversion', 'success');
      router.push(currentUrl.toString());
    },
  });

  return (
    <>
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-2 text-center">
          ¡Gracias por tu consulta!
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
        <div>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email..."
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
            formik.touched.email && formik.errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          name="to_name"
          placeholder="Tu nombre"
          value={formik.values.to_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
            formik.touched.to_name && formik.errors.to_name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {formik.touched.to_name && formik.errors.to_name && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.to_name}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Teléfono (Opcional)"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {showSubject !== false && (
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
              formik.touched.subject && formik.errors.subject
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
          )}
        </div>
      )}
      {showContent !== false && (
        <div>
          <textarea
            name="content"
            placeholder="Escribí tu mensaje..."
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 h-24 ${
              formik.touched.content && formik.errors.content
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          ></textarea>
          {formik.touched.content && formik.errors.content && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.content}</p>
          )}
        </div>
      )}
     {isLoading ?   
        <div className="flex justify-center">
          <AiOutlineLoading3Quarters className="text-xl font-bold text-blue-600 animate-spin" />
        </div>
      :
      <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
        Enviar
      </button>}
    </form>
    </>
  );
};

export default ContactForm;
