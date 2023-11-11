import { defineField, defineType } from "sanity";
import { MdPermContactCalendar as icon } from "react-icons/md";
import { getDateFromStr } from "../utils/date";

export default defineType({
  name: "turno",
  title: "Turno",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "fecha",
      title: "Fecha del turno",
      type: "date"
    }),
    defineField({
      name: "hora",
      title: "Hora inicio",
      type: "number",
      options: {
        list: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
      }
    })
  ],
  preview: {
    select: {
      fecha: "fecha",
      hora: "hora"
    },
    prepare(selection) {
      const fecha = getDateFromStr(selection.fecha);
      const hora = selection.hora;
      return {
        title: `${fecha.toLocaleDateString("es-PY", {
          weekday: "long"
        })} - ${hora}:00 hs`,
        subtitle: `${fecha.toLocaleDateString("es-PY")}`
      };
    }
  }
});
