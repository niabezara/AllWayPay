import { IAbout } from "@/utils/aboutData";
import React from "react";
import Image from "next/image";

interface CardProps {
  about: IAbout;
  onClick: () => void;
}

const PartnersCard: React.FC<CardProps> = ({ about, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative group max-w-[282px]"
    >
      <Image
        src={about.img}
        width={500}
        height={500}
        alt="partnersPhoto"
        className="w-[282px] h-[262px]"
      />
      <div className="absolute  bottom-0 overflow-hidden py-[20px] px-[16px] rounded-bl-md rounded-br-md left-0 right-0 top-[66%] bg-[#2D46C6] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
        <p className="font-medium text-[18px] leading-[21px] text-white">
          {about.name}
        </p>
        <p className="text-[14px] leading-[16px] text-white mt-2">
          {about.Position}
        </p>
      </div>
    </div>
  );
};

export default PartnersCard;
