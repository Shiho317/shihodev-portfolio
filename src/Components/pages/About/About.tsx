import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import { AboutContents, AboutLeft, AboutRight, AboutWrapper, Button, Introwrapper, SelfImg } from "./About.style";
import Skills from "./Skills";

const About = () => {

  return(
    <ThemeProvider theme={theme}>
      <AboutWrapper>
        <AboutContents>
          <AboutLeft>
            <div className="title">
              <h1>About<br/>Me.</h1>
            </div>
            <SelfImg>
              <img src='https://res.cloudinary.com/dasmbsqsx/image/upload/v1649434862/ShihoDev-Portfolio/shiho-selfimg_zhmulj.jpg' alt="self-img"/>
            </SelfImg>
            <Skills/>
          </AboutLeft>
          <AboutRight>
            <Introwrapper>
            <h3>&ldquo; I am Shiho Nagano. &rdquo;</h3>
            <p>I am a front-end developer have a passion for learning, designing, programming.<br/>
            About my personality, reliable, fast learner, self motivated, hardworking team player who works well with others.<br/>

            In my latest role as a Front end developer, I designed a website, coded and discussed how to improve a website with coworkers.<br/>

            I have a lot of experience of working as a team through my school project and past work experiences.<br/>
            In past team project, I have contributed by sharing my thoughts about not only design but also functional problem. And I keep in touch with coworker to know their progress and give them my help when they needed.<br/>
            Thus, I have a confident to communicate with others and discuss about our working improvement and leading team.<br/>
            
            I always try to create websites and application with user friendly.<br/>
            Now my new goal is not only user friendly and accurate function but also thinking how to improve code runnning efficiently.<br/>
            For achive that goal, I'm keep learning harder everyday.<br/>

            Learning programming is never end. I am into learning code and excited to create somthing from scrach.
            Even when I worked as a nurse, coding was one of my hobby.<br/>
            Now, I am coding as a job and combined with my hard learner personality has built up from nursing.<br/>
            And I will keep runnning this tech world as a programmer!!
            </p>
            <Link to='/contact'>
              <Button>CONTACT ME</Button>
            </Link>
            </Introwrapper>
          </AboutRight>
        </AboutContents>
      </AboutWrapper>
    </ThemeProvider>
  )
};

export default About;