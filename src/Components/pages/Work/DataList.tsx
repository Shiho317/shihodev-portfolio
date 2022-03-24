
import { Project, Skill, Description, Buttons, Demo } from './DataList.style';
import { BsCheck2Square } from 'react-icons/bs';
import { useCallback, useState } from 'react';

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
  }
}

const DataList: React.FC<Props> = ({project}) => {

  const [ isHover, setIsHover ] = useState<boolean>(false);

  const isHoverOn = useCallback(() => {
    setIsHover(prev => !prev)
  }, [])

  return(
    <Project>
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
            <a href={project.github}>
              <button className='github-link'>GitHub</button>
            </a>
            <a href={project.url}>
              <button className='open-link'>Open</button>
            </a>
          </Buttons>
        </div>
        <Demo>
          <img src={isHover ? project.gif : project.thumbnail} alt="gif" onMouseOver={isHoverOn} onMouseOut={isHoverOn}/>
        </Demo>
    </Project>
  )
};

export default DataList;