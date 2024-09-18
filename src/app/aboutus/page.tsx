"use client";
import { Icons } from "@/components/shared/Icons";
import React, { useEffect, useState, useMemo } from "react";
import PartnersCard from "@/components/features/PartnersCard";
import { AboutData, IAbout } from "@/utils/aboutData";
import { PartnersPagination } from "@/components/features/PartnersPagination";
import { useMediaQuery } from "@uidotdev/usehooks";

const AboutPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [aboutPer, setaboutPer] = useState(AboutData.about[0]);
  const isLargeDevice = useMediaQuery("(min-width:784px)");
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    setLimit(isLargeDevice ? 4 : 1);
  }, [isLargeDevice]);

  const paginatedData = useMemo(() => {
    const offset = (currentPage - 1) * limit;
    return AboutData.about.slice(offset, offset + limit);
  }, [currentPage, limit]);

  const pageCount = Math.ceil(AboutData.about.length / limit);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCardClick = (aboutItem: IAbout) => {
    setaboutPer(aboutItem);
  };

  return (
    <div className="flex flex-col items-center text-left mx-[16px] mt-[68px] max-w-[1440px] lg:mx-[120px] lg:mt-[125px] mb-[68px]">
      <h3 className="text-[#55EDFF] text-left w-full font-medium text-[20px] lg:text-[24px] leading-[23px] lg:leading-[28px] mb-[39px] lg:mb-[55px]">
        # about us
      </h3>
      <div className="flex flex-col gap-6 text-white w-full font-medium text-[22px] lg:text-[40px] leading-[25.78px] lg:leading-[46px] mb-12">
        <div className="flex items-center gap-1">
          <span className="hidden lg:inline-block">
            <Icons.vector />
          </span>
          <h2 className="max-w-[608px]">
            We have well experienced Team Player {aboutPer.name}{" "}
          </h2>
        </div>
        <p className="text-[15px] leading-[17.58px] font-normal text-justify lg:text-[20px] lg:leading-[23px]">
          {aboutPer.description}
        </p>
      </div>
      <p className="hidden font-normal text-[24px] text-[#28C840] leading-[28px] lg:flex lg:w-full lg:text-left lg:mb-[38px] ">
        # our team
      </p>
      {/* Display paginated cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {paginatedData.map((aboutItem) => (
          <PartnersCard
            key={aboutItem.id}
            about={aboutItem}
            onClick={() => handleCardClick(aboutItem)}
          />
        ))}
      </div>

      {/* Pagination */}
      <PartnersPagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        screenWidth={window.innerWidth} // If necessary, this can be handled similarly
        className="mt-8 lg:mt-12 flex items-center lg:justify-end lg:w-full"
      />
    </div>
  );
};

export default AboutPage;
