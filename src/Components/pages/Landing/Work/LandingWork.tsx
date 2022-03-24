import { useState } from 'react';
import ProjectDatas from '../../../../assets/ProjectData.json';
import { 
  Button, 
  ProjectDetails, 
  ProjectIcon, 
  Projects, 
  WorkWrapper
  } from "./LandingWork.style";
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiGithub, FiPaperclip } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export interface ProjectDataType{
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

  const [ isActive, setIsActive ] = useState<number>(0);

  const addActiveClass = (index: number) => {
    setIsActive(index);
  }

  const projects = ProjectDatas.projects;
  
  return(
    <WorkWrapper>
      <Projects>
        {projects.map((project, index) => (
          <div key={index} 
          className={index === isActive ? 'project active' : index < isActive ? 'project prev' : 'project'} 
          style={{backgroundImage: `url(${project.thumbnail})`}} onClick={() => addActiveClass(index)}>
            <ProjectDetails>
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
                <ProjectIcon href='{project.url}'>
                    <BiCommentDetail/>
                </ProjectIcon>
              </div>
            </ProjectDetails>
          </div>
        ))}
      </Projects>
        <Link to='/work'>
          <Button>
            SEE ALL PROJECTS
          </Button>
        </Link>
    </WorkWrapper>
  )
};

export default LandingWork;