import { FC } from "react";
import ContactForm from "./contact-form";

interface PropertyContactFormProps {
  propertyTitle: string;
  isLoading: boolean;
  onSend: (formData: FormData) => void;
}

const PropertyContactForm: FC<PropertyContactFormProps> = ({ propertyTitle, isLoading, onSend }) => {
  // Pre-fill the subject and content with the property title and user data
  const action = (formData: FormData) => {
    const nombre = formData.get("to_name") || "";
    const email = formData.get("email") || "";
    const telefono = formData.get("phone") || "";
    const subject = `Consulta sobre la propiedad: ${propertyTitle}`;
    const content = `Datos del usuario:<br/>Nombre: ${nombre}<br/>Email: ${email}<br/>Teléfono: ${telefono}<br/>Propiedad: ${propertyTitle}`;
    formData.set("subject", subject);
    formData.set("content", content);
    onSend(formData);
  };

  return (
    <ContactForm action={action} isLoading={isLoading} showSubject={false} showContent={false} />
  );
};

export default PropertyContactForm;
