"use client";
import * as React from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Navigation from "./Navigation";

import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="flex justify-between mt-[70px] mx-[36px] items-center">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={168} height={37} />
        </Link>
        <Hamburger
          size={25}
          toggle={() => toggleSidebar()}
          toggled={isMenuOpen}
          color="#FFFFFF"
        />
      </div>
      <div className=" text-white bg-[#05004C]">
        <div data-openbackground={isMenuOpen} />
      </div>
      <Navigation isMenuOpen={isMenuOpen} />
      {/* <div data-opensocials={isMenuOpen}></div>

      {/* <div>
        <Navigation desktopSize />
      </div> */}
    </header>
  );
};

export default Header;
