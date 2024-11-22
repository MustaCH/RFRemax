type IProjectType = {
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

type LocationType = {
    province?: string,
    city: string,
    hood?: string,
    street?: string,
    number?: string,
    map?: string,    
}

type OperationType = {
    type: "SALE" | "RENT"
}

type SpecificationsType = {
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

type SurfaceType = {
    surfaceTotal?: number,
    surfaceCover?: number,
    surfaceSemicover?: number,
    surfaceLand?: number
}

type PriceType = {
    price: number,
    currency: "USD" | "ARS"
}