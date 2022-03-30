import { ProjectDetails, ProjectIcon } from './ProjectData.style';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiGithub, FiPaperclip } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';

type Props = {
  isActive: number;
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
  addActiveClass: any;
}

const ProjectData: React.FC<Props> = ({project, isActive, index, addActiveClass}) => {
  return(
    <div key={index} 
          className={index === isActive ? 'project active' : index < isActive ? 'project prev' : 'project'} 
          onClick={() => addActiveClass(index)}>
      <ProjectDetails>
        <div className='project-img'>
          <img src={project.thumbnail} alt="project-img" />
        </div>
        <div className={ index !== isActive ? 'project-type' : 'hidden'}>
          <ProjectIcon>
            {project.type[0] === 'website' ? (
              <CgWebsite/>
            ) : (
              <AiOutlineAppstoreAdd/>
            )}
          </ProjectIcon>
        </div>
        <div className={ index === isActive ? 'icons' : 'hidden'}>
          <ProjectIcon href={project.github} target="_blank" rel="noopener noreferrer">
            <FiGithub/>
          </ProjectIcon>
          <ProjectIcon href={project.url} target="_blank" rel="noopener noreferrer">
            <FiPaperclip/>
          </ProjectIcon>
          <ProjectIcon href={`/work#id-${index}`}>
            <BiCommentDetail/>
          </ProjectIcon>
        </div>
      </ProjectDetails>
    </div>
  )
}

export default ProjectData;