import React from "react";
import Layout from "@components/Layout";

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({
  children
}) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Page;
