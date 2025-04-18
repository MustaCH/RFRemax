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
  hood?: string; // Barrio
  street?: string;
  number?: string;
};

export type SpecificationsType = {
  age?: number;
  bathrooms?: number;
  toilets?: number;
  rooms?: number;
  garage?: number;
  floor?: number;
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
  specifications?: SpecificationsType;
}
