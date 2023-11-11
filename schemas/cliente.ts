import { defineField, defineType } from "sanity";
import { MdPerson as icon } from "react-icons/md";

export default defineType({
  name: "cliente",
  title: "Cliente",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      description: "Nombre del cliente. Ej: Juan"
    }),
    defineField({
      name: "apellido",
      title: "Apellido",
      type: "string",
      description: "Apellido del cliente. Ej: Perez"
    }),
    defineField({
      name: "ruc",
      title: "RUC",
      type: "string",
      description: "RUC del cliente. Ej: 4834291-1"
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: { nombre: "nombre", apellido: "apellido", media: "image" },
    prepare(selection) {
      return {
        title: `${selection.nombre} ${selection.apellido}`,
        media: selection.media
      };
    }
  }
});
