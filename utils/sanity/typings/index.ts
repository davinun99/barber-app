import { Cliente, Country, Product, Reserva, Size, Taxon, Taxonomy, Turno, Variant } from "@typings/models";

export interface SanityCountry extends Omit<Country, "name"> {
  name: Record<string, string>;
}

export interface SanityTaxonomy extends Omit<Taxonomy, "name" | "taxons"> {
  name: Record<string, string>;
  label: Record<string, string>;
  taxons: SanityTaxon[];
}

export interface SanityTaxon extends Omit<Taxon, "name" | "products"> {
  name: Record<string, string>;
  label: Record<string, string>;
  products: SanityProduct[];
}

export interface SanityProduct extends Omit<Product, "name" | "description" | "slug" | "variants"> {
  name: Record<string, string>;
  description: Record<string, string>;
  slug: Record<string, any>;
  variants: SanityVariant[];
}

export interface SanityVariant extends Omit<Variant, "name" | "size"> {
  name: Record<string, string>;
  size: SanitySize;
}

export interface SanitySize extends Omit<Size, "name"> {
  name: Record<string, any>;
}
export interface SanityTurno extends Omit<Turno, "fecha" | "hora">{
  fecha: Record<string, string>;
  hora: Record<string, string>;
}
export interface SanityCliente extends Omit<Cliente, "nombre" | "apellido" | "ruc" | "foto"> {
  nombre: Record<string, string>;
  apellido: Record<string, string>;
  ruc: Record<string, string>;
  foto: Record<string, any>;
}
export interface SanityReserva extends Omit<Reserva, "cliente" | "turno" | "fechaReserva" | "_id"> {
  _id: Record<string, string>;
  cliente: Record<string, string>;
  description: Record<string, string>;
  slug: Record<string, any>;
  variants: SanityVariant[];
}
