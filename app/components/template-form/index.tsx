import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from '@next/third-parties/google'


interface TemplateFormProps {
  action: (formData: FormData) => void;
  isLoading: boolean;
}

const TemplateForm: FC<TemplateFormProps> = ({ action, isLoading }) => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingresa un email válido")
      .required("El email es obligatorio"),
    to_name: Yup.string().required("El nombre es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      to_name: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      try {
      await action(formData);
      
        sendGTMEvent({
          event: 'conversion',
          form_name: 'exclusive_info_modal', 
          ...values 
        });

        sendGTMEvent({
            event: 'conversion',
            send_to: 'AW-17024068643/_bxECNvTnr0aEKPY2rU_', 
            value: 1.0, 
            currency: 'ARS'
        });
        
    
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('conversion', 'success');
      router.push(currentUrl.toString());
      action(formData); 
      }
      catch (error) { 
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
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
     {isLoading ?   
        <div className="flex justify-center">
          <AiOutlineLoading3Quarters className="text-xl font-bold text-blue-600 animate-spin" />
        </div>
      :
      <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
        Quiero información!
      </button>}
    </form>
  );
};

export default TemplateForm;
