import React from "react";
import { GetStaticProps, NextPage } from "next";
import ListaReservas from "@components/ListaReservas";
import Page from "@components/Page";
import { Reserva } from "@typings/models";
import sanityApi from "@utils/sanity/api";

type Props = {
  reservas: Reserva[];
};

const index: NextPage<Props> = ({ reservas }) => {
  return (
    <Page>
      <div className="px-3 lg:px-0 container mx-auto max-w-screen-lg flex flex-wrap sm:flex-nowrap">
        <ListaReservas reservas={reservas} />
      </div>
    </Page>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const reservas = await sanityApi.getAllReservas();
  return {
    props: {
      reservas
    },
    revalidate: 60
  };
};
