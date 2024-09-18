"use client";
import { Icons } from "@/components/shared/Icons";
import ProjectCard from "@/components/features/ProjectCard";
import { Projects, ProjectsData } from "@/utils/projectData";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Page() {
  const [project, setProject] = useState(ProjectsData.project[0]);

  // Handle card click to display selected project’s title and description
  const handleCardClick = (project: Projects) => {
    setProject(project);
  };

  return (
    <div className="flex flex-col items-center text-left mx-[16px] mt-[68px] max-w-[1440px] lg:mx-[120px] lg:mt-[125px] mb-[68px]">
      <h3 className="text-[#55EDFF] text-left w-full font-medium text-[20px] lg:text-[24px] leading-[23px] lg:leading-[28px] mb-[39px] lg:mb-[55px]">
        # Our Projects
      </h3>
      <div className="flex flex-col gap-6 text-white w-full font-medium text-[22px] lg:text-[40px] leading-[25.78px] lg:leading-[46px] mb-12">
        <div className="flex items-center gap-1">
          <span className="hidden lg:inline-block">
            <Icons.vector />
          </span>
          <h2>Our Project {project.id}</h2>
        </div>

        <p className="text-[15px] leading-[17.58px] font-normal text-justify lg:text-[20px] lg:leading-[23px]">
          {project.description}
        </p>
      </div>
      {/* Display cards */}

      <Carousel>
        <CarouselContent className="h-[300px] lgDesktop:h-[702px] cursor-grab">
          {ProjectsData.project.map((project) => (
            <CarouselItem key={project.id}>
              <ProjectCard
                project={project}
                onClick={() => handleCardClick(project)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex bg-[#384BFF94] text-white h-[50px] w-[50px] left-[-2rem] border-0 " />
        <CarouselNext className="hidden lg:flex bg-[#384BFF94] text-white h-[50px] w-[50px] right-[-2rem] border-0" />
      </Carousel>
      <button className="hidden lg:flex gap-2 bg-[#384BFF94] px-[45px] py-[16px] text-white items-center mt-[84px] rounded-[10px]">
        <Icons.backarrow />
        back
      </button>
    </div>
  );
}

export default Page;
