import ProjectData from "./ProjectData";
import ProjectDatas from "../../../../assets/ProjectData.json";
import { Button, Projects, WorkWrapper } from "./LandingWork.style";
import { Link } from "react-router-dom";

export interface ProjectDataType {
  title: string;
  type: string[];
  thumbnail: string;
  gif: string;
  url: string;
  github: string;
  skills: string[];
  descriptions: string[];
}

const LandingWork = () => {
  const projects = ProjectDatas.projects;

  return (
    <WorkWrapper>
      <Projects>
        {projects.map((project, index) => (
          <ProjectData project={project} key={index} index={index} />
        ))}
      </Projects>
      <Link to="/work">
        <Button>SEE ALL PROJECTS</Button>
      </Link>
    </WorkWrapper>
  );
};

export default LandingWork;
