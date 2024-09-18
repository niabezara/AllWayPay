"use client";
import { Icons } from "@/components/shared/Icons";
import ProjectCard from "@/components/ui/ProjectCard";
import { ProjectsData } from "@/utils/projectData";
import React, { useState } from "react";

function page() {
  const [project, setProject] = useState(ProjectsData.project[0]);
  // Handle card click to display selected service's title and description
  const handleCardClick = (project: any) => {
    setProject(project);
  };
  return (
    <div className="flex flex-col items-center text-left mx-[16px] mt-[68px] max-w-[1440px] lg:mx-[120px] lg:mt-[125px] mb-[68px]">
      <h3 className="text-[#55EDFF] text-left w-full font-medium text-[20px] lg:text-[24px] leading-[23px] lg:leading-[28px] mb-[39px]  lg:mb-[55px]">
        # our projects
      </h3>
      <div className="flex flex-col gap-6 text-white w-full font-medium text-[22px] lg:text-[40px] leading-[25.78px] lg:leading:[46px] mb-12">
        <div className="flex items-center gap-1">
          <span className="hidden lg:inline-block">
            <Icons.vector />
          </span>
          <h2>Our Project{project.id}</h2>
        </div>

        <p className="text-[15px] leading-[17.58px] font-normal text-justify lg:text-[20px] lg:leading-[23px]">
          {project.description}
        </p>
      </div>
      {/* Display cards */}
      <h1 className="hidden lg:flex lg:w-full lg:text-left text-white font-medium text-[40px] leading-[46px] lg:mb-[38px] ">
        more services
      </h1>
      <div className="flex flex-wrap gap-9 w-full">
        {ProjectsData.project.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
