"use client";
import Hamburger from "hamburger-react";
import Navigation from "./Navigation";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useDisableBodyScroll } from "@/hooks/use-disable-scroll";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useDisableBodyScroll(isMenuOpen); // custom hook to disable body scroll

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn("flex w-full justify-center")}>
      <div
        className={cn(
          " w-full  max-w-[1440px] flex items-center justify-between mt-[70px] mx-[34px] lg:mt-[102px] lg:mx-[119px]"
        )}
      >
        <Link href={`/`} onClick={() => setIsMenuOpen(false)} className="">
          <div className="flex items-center ">
            <Image
              src="/assets/logo.png"
              width={500}
              height={500}
              alt=""
              priority
              className="w-[168px] h-[37px]"
            />
          </div>
        </Link>
        <div className="flex items-center  lg:hidden z-20 ">
          <div className={cn("navButton")}>
            <Hamburger
              toggled={isMenuOpen}
              toggle={() => toggleSidebar()}
              size={20}
              color={"#fff"}
            />
          </div>
        </div>

        <div className=" absolute top-0 left-0 pointer-events-none w-[238px] h-dvh overflow-hidden z-10">
          {/* 1px height bg */}
          <div
            className={cn(
              `absolute top-[45px] left-2 h-[53px] w-[53px] rounded-full  max-w-[375px] bg-cover bg-center bg-[#05004C]/50 invisible z-0
          transition-all duration-800 ease-burger-menu  pointer-events-none`,
              isMenuOpen && "scale-[80] visible"
            )}
          />
        </div>
        <Navigation isMenuOpen={isMenuOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
};

export default Header;
