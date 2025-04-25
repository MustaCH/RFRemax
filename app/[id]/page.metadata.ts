import { Metadata } from "next";
import { getPropertyById } from "../services";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = await getPropertyById(params.id);
  if (!property) {
    return {
      title: "Propiedad no encontrada | Romina Frola - Agente Inmobiliario",
      description: "La propiedad que buscas no fue encontrada en nuestro sitio. Consulta otras opciones en Romina Frola - Agente Inmobiliario.",
    };
  }
  return {
    title: `${property.title} | Romina Frola - Agente Inmobiliario` || "Propiedad en venta | Romina Frola - Agente Inmobiliario",
    description: property.description?.replace(/<[^>]+>/g, "").slice(0, 160) || `Consulta por la propiedad ${property.title} en Romina Frola - Agente Inmobiliario.`,
  };
}
