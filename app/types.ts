export type IProjectType = {
    id: string,
    title: string,
    description: string,
    location?: LocationType,
    operation: OperationType,
    images: string[],
    video?: string,
    specifications?: SpecificationsType,
    price: PriceType,
    expenses?: PriceType,
}

export type LocationType = {
    province?: string,
    city: string,
    hood?: string,
    street?: string,
    number?: string,
    map?: string,    
}

export type OperationType = {
    type: "SALE" | "RENT"
}

export type SpecificationsType = {
    surface?: SurfaceType,
    age?: number,
    rooms?: number,
    bedrooms?: number,
    bathrooms?: number,
    toilets?: number,
    garage?: number,
    floor?: number,
    professional?: boolean,
}

export type SurfaceType = {
    surfaceTotal?: number,
    surfaceCover?: number,
    surfaceSemicover?: number,
    surfaceLand?: number
}

export type PriceType = {
    price: number,
    currency: "USD" | "ARS"
}