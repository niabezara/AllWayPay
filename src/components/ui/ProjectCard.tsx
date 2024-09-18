import { Projects } from "@/utils/projectData";
import React from "react";

interface CardProps {
  project: Projects;
  onClick: () => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, onClick }) => {
  return <div>ProjectCard</div>;
};

export default ProjectCard;
