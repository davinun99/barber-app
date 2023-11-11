import { defineField, defineType } from "sanity";
import { MdPermContactCalendar as icon } from "react-icons/md";
import { getDateFromStr } from "../utils/date";


export default defineType({
  name: "reserva",
  title: "Reserva",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "cliente",
      title: "Cliente",
      type: "reference",
      to: [{ type: "cliente" }]
    }),
    defineField({
      name: "turno",
      title: "Turno",
      type: "reference",
      to: [{ type: "turno" }]
    })
  ],
  preview: {
    select: {
      fecha: "turno.fecha",
      hora: "turno.hora",
      nombre: "cliente.nombre",
      apellido: "cliente.apellido"
    },
    prepare(selection) {
      const fecha = getDateFromStr(selection.fecha);
      const hora = selection.hora;
      return {
        title: `Reserva de ${selection.nombre} ${selection.apellido}`,
        subtitle: `${fecha.toLocaleDateString("es-PY", {
          weekday: "long"
        })} - ${hora}:00 hs`
        // subtitle: `${fecha.toLocaleDateString("es-PY")}`
      };
    }
  }
});
