import { HashLink } from "react-router-hash-link";
import {
  ProjectContents,
  ProjectDetails,
  ProjectIcon,
} from "./ProjectData.style";
import { FiGithub, FiPaperclip } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";

type Props = {
  index: number;
  project: {
    title: string;
    type: string[];
    thumbnail: string;
    gif: string;
    url: string;
    github: string;
    skills: string[];
    descriptions: string[];
  };
};

const ProjectData: React.FC<Props> = ({ project, index }) => {
  return (
    <ProjectDetails>
      <div className="project-img">
        <img src={project.thumbnail} alt="project-img" />
      </div>
      <ProjectContents>
        <ProjectIcon
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </ProjectIcon>
        <ProjectIcon
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiPaperclip />
        </ProjectIcon>
        <HashLink className="work-icon" to={`/work#id-${index}`}>
          <BiCommentDetail />
        </HashLink>
      </ProjectContents>
    </ProjectDetails>
  );
};

export default ProjectData;
