"use client";

import { Reserva } from "@typings/models";
import { Card, Avatar } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { getDateFromStr } from "@utils/date";
type Props = {
  reservas: Reserva[];
};

const ListaReservas: React.FC<Props> = ({ reservas }) => {
  return (
    <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Reservas de hoy
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          {/* View all */}
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {reservas.map(reserva => (
            <li className="py-3 sm:py-4" key={reserva._id}>
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  { reserva.cliente.foto ? <Image
                    alt="client image"
                    height="32"
                    src={reserva.cliente.foto}
                    width="32"
                    className="rounded-full"
                  /> : <Avatar />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {reserva.cliente.nombre} {reserva.cliente.apellido}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {getDateFromStr(reserva.turno.fecha).toLocaleDateString("es-PY", { weekday: "long", day: "2-digit" })}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {reserva.turno.hora}:00 hs.
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ListaReservas;
