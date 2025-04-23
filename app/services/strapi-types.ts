// Tipos estrictos para StrapiProperty

export interface StrapiImage {
  url: string;
  [key: string]: unknown; // Si hay más campos, ajusta aquí
}

export interface StrapiDescriptionChild {
  text: string;
  [key: string]: unknown;
}

export interface StrapiDescriptionBlock {
  type: string;
  children: StrapiDescriptionChild[];
  [key: string]: unknown;
}
