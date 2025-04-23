// Tipos estrictos para StrapiProperty

export interface StrapiImage {
  url: string;
  [key: string]: any; // Si hay más campos, ajusta aquí
}

export interface StrapiDescriptionChild {
  text: string;
  [key: string]: any;
}

export interface StrapiDescriptionBlock {
  type: string;
  children: StrapiDescriptionChild[];
  [key: string]: any;
}
