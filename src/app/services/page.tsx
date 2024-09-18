"use client";
import { Icons } from "@/components/shared/Icons";
import ServicesCard from "@/components/ui/ServicesCard";
import { servicesData } from "@/utils/siteData";
import { useState } from "react";

const ServicePage: React.FC = ({}) => {
  const [selectedService, setSelectedService] = useState(
    servicesData.services[0]
  );

  // Manage the number of displayed cards
  const [visibleCount, setVisibleCount] = useState(3);

  // Load more cards by increasing the visible count
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Handle card click to display selected service's title and description
  const handleCardClick = (service: any) => {
    setSelectedService(service);
  };

  return (
    <div className="flex flex-col items-center text-left mx-[16px] mt-[68px] max-w-[1440px] lg:mx-[120px] lg:mt-[125px] mb-[68px]">
      <h3 className="text-[#55EDFF] text-left w-full font-medium text-[20px] lg:text-[24px] leading-[23px] lg:leading-[28px] mb-[39px]  lg:mb-[55px]">
        # services
      </h3>
      <div className="flex flex-col gap-6 text-white w-full font-medium text-[22px] lg:text-[40px] leading-[25.78px] lg:leading:[46px] mb-12">
        <div className="flex items-center gap-1">
          <span className="hidden lg:inline-block">
            <Icons.vector />
          </span>
          <h2>{selectedService.name}</h2>
        </div>

        <p className="text-[15px] leading-[17.58px] font-normal text-justify lg:text-[20px] lg:leading-[23px]">
          {selectedService.description}
        </p>
      </div>
      {/* Display cards */}
      <h1 className="hidden lg:flex lg:w-full lg:text-left text-white font-medium text-[40px] leading-[46px] lg:mb-[38px] ">
        more services
      </h1>
      <div className="flex flex-wrap gap-9 w-full">
        {servicesData.services.slice(0, visibleCount).map((service) => (
          <ServicesCard
            key={service.id}
            service={service}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>

      {/* Load More button */}
      {visibleCount < servicesData.services.length && (
        <button
          onClick={loadMore}
          className="bg-[#384BFF] flex items-center gap-2 rounded-[10px] w-fit  font-medium text-white text-[16px] leading-[18.75px] py-4 px-7 mt-12"
        >
          <Icons.plus /> Load More
        </button>
      )}
    </div>
  );
};

export default ServicePage;
