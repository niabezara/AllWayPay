import React from "react";
import Image from "next/image";
import { Icons } from "../shared/Icons";

interface Service {
  id: number;
  key: string;
  name: string;
  img: string;
  color: string;
  description: string;
}

interface CardProps {
  service: Service;
  onClick: () => void;
}

const ServicesCard: React.FC<CardProps> = ({ service, onClick }) => {
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div
      className="bg-white w-full p-5 rounded-xl font-semibold  text-black lg:max-w-[384px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-[11px]">
        <div
          className="py-4 px-5 inline-block rounded-md "
          style={{ backgroundColor: service.color, opacity: 30 }}
        >
          <Image
            src={service.img}
            width={500}
            height={500}
            alt="icon"
            className="w-[40px] h-[32px]"
          />
        </div>
        <h1 className="font-semibold text-[60px] leading-[70px] text-[#3730A3] opacity-5">
          {service.key}
        </h1>
      </div>
      <h3 className="text-[22px] leading-[25.76px]">{service.name}</h3>
      <p className="leading-[14px] text-[12px] my-2">
        {truncateDescription(service.description, 100)}
      </p>
      <Icons.arrow />
    </div>
  );
};
export default ServicesCard;
