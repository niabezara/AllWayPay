import { Projects } from "@/utils/projectData";
import React from "react";
import Image from "next/image";

interface CardProps {
  project: Projects;
  onClick: () => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, onClick }) => {
  return (
    <div onClick={onClick}>
      <Image
        src={project.img}
        width={500}
        height={500}
        alt="icon"
        className="w-[328px] h-[290px] lg:w-[384px] lg:h-[290px]"
      />
    </div>
  );
};

export default ProjectCard;
