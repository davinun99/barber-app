import React from "react";
import { Country } from "@typings/models";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-gray-50 mt-24 md:mt-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <hr />
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 md:px-8">
        <div className="mt-16 lg:flex lg:items-center lg:justify-between">
          {" "}
          <div className="md:flex md:items-center md:space-x-5">
            {/* <CountrySelector options={countries} /> */}
            {/* <LanguageSelector options={buildLanguages} /> */}
          </div>
          <div className="md:flex md:items-center">
            <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} | {""}
              {process.env.NEXT_PUBLIC_SITE_NAME
                ? process.env.NEXT_PUBLIC_SITE_NAME
                : "Examples Store, Inc"}
              . | Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
