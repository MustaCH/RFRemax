// src/app/types.ts

export type OperationType = {
  type: string;
};

export type PriceType = {
  price: number;
  currency: string;
};

export type LocationType = {
  province?: string;
  city?: string;
  hood?: string;
  street?: string;
  number?: string;
};

export type SurfaceType = {
  surfaceTotal?: number;
  surfaceCover?: number;
  surfaceSemiCover?: number;
  surfaceLand?: number;
};

export type SpecificationsType = {
  age?: number;
  bathrooms?: number;
  bedrooms?: number;
  toilets?: number;
  rooms?: number;
  garage?: number;
  floor?: number;
  professional?: boolean;
};

export interface IProjectType {
  id: string;
  title: string;
  description: string;
  operation: OperationType;
  availability: boolean;
  images?: string[];
  price: PriceType;
  expenses?: PriceType;
  location?: LocationType;
  surface?: SurfaceType;
  specifications?: SpecificationsType;
}
