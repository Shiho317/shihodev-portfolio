import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { AboutContents, AboutLeft, AboutRight, AboutWrapper, Button, Introwrapper, SelfImg } from "./About.style";
import selfImg from '../../../assets/images/aboutme-img.png';
import Skills from "./Skills";

const About = () => {

  return(
    <ThemeProvider theme={theme}>
      <AboutWrapper>
        <Header/>
        <AboutContents>
          <AboutLeft>
            <div className="title">
              <h1>About<br/>Me.</h1>
            </div>
            <SelfImg>
              <img src={selfImg} alt="self-img"/>
            </SelfImg>
            <Skills/>
          </AboutLeft>
          <AboutRight>
            <Introwrapper>
            <h3>&ldquo; I am Shiho Nagano. &rdquo;</h3>
            <p>A front-end developer with a background as a nurse and a passion for learning, designing, programming, building functions.<br/>
            About personality, reliable, fast learner, self motivated, hardworking team player who works well with others.<br/>
            I believe that my passion for web development, designing, my skills and my personality would make me a great asset for your team and I would love to improve my knowledge and skills as your team member as well.<br/>

            In my latest role as a Front end developer at Protest Tunes, I design a website, code and discuss how to improve a website with coworkers.<br/>
            I have a lot of experience of working as a team through my school project and past work experience.<br/> 
            Combined with my communication skills, problem-solving skills and passion for improving my skills, I am confident I have skills to become part of your team to make your company more successful.<br/>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, vero placeat possimus, earum ad quae voluptatum quos, provident at id velit doloribus culpa. Alias porro, provident quasi ea odit ducimus?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, quibusdam nostrum. Tempore suscipit, quos commodi sit perspiciatis nihil tenetur, maiores molestiae autem sequi quod! Ad praesentium sint repellat deleniti! Optio!
            </p>
            <Link to='/'>
              <Button>CONTACT ME</Button>
            </Link>
            </Introwrapper>
          </AboutRight>
        </AboutContents>
        <Footer/>
      </AboutWrapper>
    </ThemeProvider>
  )
};

export default About;