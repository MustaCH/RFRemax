import { Metadata } from "next";
import { getPropertyById } from "../services";
import { propertiesDescription } from "./descriptions";

export async function GenerateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = await getPropertyById(params.id);
  let description: string | undefined;

if (property) {
    if (property.id === "kvjbgq3pb9h8szpv22db75r2") {
      description = propertiesDescription.dpto_venta_puerto_madero;
    } else if (property.id === "dvd52aaf0nqmrc99gx4zdcda") {
      description = propertiesDescription.nave_alquiler_escobar;
    } else if (property.id === "jmf5w0vr6v9kiismsf12nvy5") {
      description = propertiesDescription.venta_local_renta_puerto_madero;
    }
  }

  if (!property) {
    return {
      title: "Propiedad no encontrada | Romina Frola - Agente Inmobiliario",
      description: "La propiedad que buscas no fue encontrada en nuestro sitio. Consulta otras opciones en Romina Frola - Agente Inmobiliario.",
      openGraph: {
        title: "Propiedad no encontrada | Romina Frola - Agente Inmobiliario",
        description: "La propiedad que buscas no fue encontrada en nuestro sitio. Consulta otras opciones en Romina Frola - Agente Inmobiliario.",
        type: "website",
        url: "https://rfrola.com.ar/",
      },
      twitter: {
        card: "summary_large_image",
        title: "Propiedad no encontrada | Romina Frola - Agente Inmobiliario",
        description: "La propiedad que buscas no fue encontrada en nuestro sitio. Consulta otras opciones en Romina Frola - Agente Inmobiliario.",
      },
    };
  }
  const cleanDescription = description?.replace(/<[^>]+>/g, "").slice(0, 160) || `Consulta por la propiedad ${property.title} en Romina Frola - Agente Inmobiliario.`;
  const image = property.images && property.images.length > 0 ? property.images[0] : "https://rfrola.com.ar/og-default.jpg";
  const url = `https://rfrola.com.ar/${property.id}`;
  return {
    title: `${property.title} | Romina Frola - Agente Inmobiliario` || "Propiedad en venta | Romina Frola - Agente Inmobiliario",
    description: cleanDescription,
    openGraph: {
      title: `${property.title} | Romina Frola - Agente Inmobiliario` || "Propiedad en venta | Romina Frola - Agente Inmobiliario",
      description: cleanDescription,
      type: "article",
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Romina Frola - Agente Inmobiliario` || "Propiedad en venta | Romina Frola - Agente Inmobiliario",
      description: cleanDescription,
      images: [image],
    },
  };
}
