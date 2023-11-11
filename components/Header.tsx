import React from "react";
import Image from "next/image";
import Link from "next/link";
import SEOHead from "@components/SEO";

type Props = {
  pageTitle?: string;
};

const Header: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <SEOHead productName={pageTitle} />
      <div className="sticky top-0 max-w-7xl mx-auto">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Header navigation"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href={"/"} passHref>
                <div className="flex items-center">
                  <span className="sr-only">Mopri Barber logo </span>
                  <Image
                    className="h-20 w-auto mr-3"
                    src={require("../images/barberBar.gif")}
                    alt="Commerce Layer Logo"
                    loading="eager"
                    // width={500}
                    // height={50}
                  />
                  <span>Mopri Barber</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            Bienvenido!
          </div>
        </nav>
        <hr className="mt-6" />
      </div>
    </>
  );
};

export default Header;
