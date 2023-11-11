export interface Country {
  name: string;
  defaultLocale: string;
  code: string;
  domain: string;
  catalog: Catalog;
  image: Image;
  marketId: string;
}

export interface Catalog {
  name: string;
  taxonomies: Taxonomy[];
}

export interface Taxonomy {
  name: string;
  taxons: Taxon[];
}

export interface Taxon {
  name: string;
  slug: string;
  description: string;
  products: Product[];
  taxons: Taxon[];
}

export interface Product {
  name: string;
  slug: string;
  variants: Variant[];
  reference: string;
  description: string;
  images: Image[];
}

export interface Variant {
  name: string;
  code: string;
  description: string;
  size: Size;
  images: Image[];
}

export interface Size {
  name: string;
}

export interface Image {
  file?: {
    url?: string;
  };
  url: string;
}

export interface SelectorObject {
  code: string;
  imageUrl: string;
}
export interface Turno {
  fecha: string;
  hora: string;
}
export interface Cliente {
  nombre: string;
  apellido: string;
  ruc: string;
  foto?: string;
}
export interface Reserva {
  _id: string;
  cliente: Cliente;
  turno: Turno;
  fechaReserva: string;
}