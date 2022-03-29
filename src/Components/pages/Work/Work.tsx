import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/Theme';
import ProjectData from '../../../assets/ProjectData.json';
import { Projects, WorkContents, WorkTitles, WorkWrapper } from './Work.style';
import Footer from '../../Footer/Footer';
import DataList from './DataList';


const Work = () => {

  const projects = ProjectData.projects;

  return(
    <ThemeProvider theme={theme}>
      <WorkWrapper>
        <WorkContents>
          <WorkTitles>
            <div className='title'>
              <h1>My Works.</h1>
            </div>
            <Projects>
              {projects.map((project, index) => (
                <DataList key={index} project={project} index={index}/>
              ))}
            </Projects>
          </WorkTitles>
        </WorkContents>
        <Footer/>
      </WorkWrapper>
    </ThemeProvider>
  )
};

export default Work;