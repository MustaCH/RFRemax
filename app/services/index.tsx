import { IProjectType } from "../types";

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://rfcms.fly.dev";

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
    bedrooms: number;
    toilets: number;
    rooms: number;
    garage: number;
    floor: number;
    professional: boolean;
  };
  surface?: {
    id: number;
    surfaceTotal: number;
    surfaceCover: number;
    surfaceSemiCover: number;
    surfaceLand: number;
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

const transformStrapiData = (strapiData: StrapiProperty): IProjectType => {
  const images =
    strapiData.images &&
    strapiData.images.map((img: any) => {
      return `${img.url}`;
    });

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

  const operation = {
    type: strapiData.operation,
  };

  const location = strapiData.location
    ? {
        province: strapiData.location.province,
        city: strapiData.location.city,
        hood: strapiData.location.neighborhood,
        street: strapiData.location.street,
        number: strapiData.location.number,
      }
    : undefined;

  const specs = strapiData.specifications
    ? {
        age: strapiData.specifications.age,
        bedrooms: strapiData.specifications.bedrooms,
        bathrooms: strapiData.specifications.bathrooms,
        toilets: strapiData.specifications.toilets,
        rooms: strapiData.specifications.rooms,
        garage: strapiData.specifications.garage,
        floor: strapiData.specifications.floor,
        professional: strapiData.specifications.professional,
      }
    : undefined;
  const surface = strapiData.surface
    ? {
        surfaceTotal: strapiData.surface.surfaceTotal,
        surfaceCover: strapiData.surface.surfaceCover,
        surfaceSemiCover: strapiData.surface.surfaceSemiCover,
        surfaceLand: strapiData.surface.surfaceLand,
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
    surface,
  };
};

export const getProperties = async (): Promise<IProjectType[]> => {
  try {
    const response = await fetch(`${API_URL}/api/properties?populate=*`);
    if (!response.ok) {
      throw new Error("Error fetching properties");
    }

    const result = await response.json();
    const properties = result.data;

    return properties.map((property: StrapiProperty) => {
      return transformStrapiData(property);
    });
  } catch (error) {
    console.error("Error loading properties:", error);
    return [];
  }
};

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
    console.log("Propiedad:", property);

    return transformStrapiData(property);
  } catch (error) {
    console.error("Error loading property:", error);
    return null;
  }
};
