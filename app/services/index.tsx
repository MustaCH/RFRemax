// src/app/services/strapiService.ts

import { IProjectType } from "../types";

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// Tipo que representa la estructura de respuesta de Strapi
export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Tipo para la estructura de propiedad que devuelve tu API
export interface StrapiProperty {
  id: number;
  documentId: string;
  title: string;
  description: any[];
  operation: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: any[];
  price: {
    id: number;
    price: number;
    currency: string;
  };
  expenses?: {
    id: number;
    price: number;
    currency: string;
  };
  specifications: {
    id: number;
    age: number;
    bathrooms: number;
    toilets: number;
    rooms: number;
    garage: number;
    floor: number;
  };
  location: {
    id: number;
    province: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
  };
}

// Función para transformar la respuesta de Strapi a nuestro formato IProjectType
const transformStrapiData = (strapiData: StrapiProperty): IProjectType => {
  // Transformar las imágenes
  const images =
    strapiData.images &&
    strapiData.images.map((img: any) => {
      // Asegúrate de usar la URL completa de la imagen
      return `${API_URL}${img.url}`;
    });

  // Transformar la descripción de formato Rich Text a HTML
  let descriptionHtml = "";
  if (Array.isArray(strapiData.description)) {
    descriptionHtml = strapiData.description
      .map((block: any) => {
        if (block.type === "paragraph") {
          const text = block.children.map((child: any) => child.text).join("");
          return text ? `<p>${text}</p>` : "";
        }
        return "";
      })
      .join("");
  }

  // Crear el objeto de operación
  const operation = {
    type: strapiData.operation,
    // Puedes agregar más campos según sea necesario
  };

  // Transformar la ubicación
  const location = strapiData.location
    ? {
        province: strapiData.location.province,
        city: strapiData.location.city,
        hood: strapiData.location.neighborhood,
        street: strapiData.location.street,
        number: strapiData.location.number,
      }
    : undefined;

  // Transformar las especificaciones
  const specs = strapiData.specifications
    ? {
        age: strapiData.specifications.age,
        bathrooms: strapiData.specifications.bathrooms,
        toilets: strapiData.specifications.toilets,
        rooms: strapiData.specifications.rooms,
        garage: strapiData.specifications.garage,
        floor: strapiData.specifications.floor,
      }
    : undefined;

  return {
    id: strapiData.documentId,
    title: strapiData.title,
    description: descriptionHtml,
    operation,
    availability: strapiData.availability,
    images,
    price: strapiData.price,
    expenses: strapiData.expenses,
    location,
    specifications: specs,
  };
};

// Función para obtener todas las propiedades
export const getProperties = async (): Promise<IProjectType[]> => {
  try {
    const response = await fetch(`${API_URL}/api/properties?populate=*`);
    if (!response.ok) {
      throw new Error("Error fetching properties");
    }

    const result = await response.json();
    const properties = result.data;

    // Transformar los datos al formato que espera tu aplicación
    return properties.map((property: StrapiProperty) => {
      return transformStrapiData(property);
    });
  } catch (error) {
    console.error("Error loading properties:", error);
    return [];
  }
};

// Función para obtener una propiedad específica por ID
export const getPropertyById = async (
  id: string
): Promise<IProjectType | null> => {
  try {
    const response = await fetch(
      `${API_URL}/api/properties?filters[documentId][$eq]=${id}&populate=*`
    );

    if (!response.ok) {
      throw new Error("Error fetching property");
    }

    const result = await response.json();

    if (!result.data || result.data.length === 0) {
      return null;
    }

    const property = result.data[0];

    return transformStrapiData(property);
  } catch (error) {
    console.error("Error loading property:", error);
    return null;
  }
};
