import { Project, Skill, Description, Buttons, Demo } from './DataList.style';
import { BsCheck2Square } from 'react-icons/bs';
import { useCallback, useState } from 'react';
import { Fade } from "react-awesome-reveal";

type Props = {
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
  index: number;
}

const DataList: React.FC<Props> = ({project, index}) => {

  const [ isHover, setIsHover ] = useState<boolean>(false);

  const isHoverOn = useCallback(() => {
    setIsHover(prev => !prev)
  }, [])

  return(
    <Fade direction='up' duration={500} triggerOnce>
      <Project id={`id-${index}`} style={ {flexDirection: index % 2 === 0 ? 'row-reverse' : 'row'} }>
        <div className='explanation'>
          <Skill>
            {project.skills.map((skill, index) => (
              <li key={index}>
                {skill}
              </li>
            ))}
          </Skill>
          <Description>
            {project.descriptions.map((description, index) => (
              <li key={index}>
                <BsCheck2Square/>
                {description}
              </li>
            ))}
          </Description>
          <Buttons>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className='github-link'>GitHub</button>
            </a>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className='open-link'>Open</button>
            </a>
          </Buttons>
        </div>
        <Demo>
          <img src={isHover ? project.gif : project.thumbnail} alt="gif" onMouseOver={isHoverOn} onMouseOut={isHoverOn}/>
        </Demo>
      </Project>
    </Fade>
  )
};

export default DataList;