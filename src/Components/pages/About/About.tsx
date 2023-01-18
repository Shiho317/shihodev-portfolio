import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import {
  AboutContents,
  AboutLeft,
  AboutRight,
  AboutWrapper,
  Button,
  Introwrapper,
  SelfImg,
} from "./About.style";
import Skills from "./Skills";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <AboutWrapper>
        <AboutContents>
          <AboutLeft>
            <div className="title">
              <h1>
                About
                <br />
                Me.
              </h1>
            </div>
            <SelfImg>
              <img
                src="https://res.cloudinary.com/dasmbsqsx/image/upload/v1674080105/ShihoDev-Portfolio/shiho-nagano_tyvzk9.jpg"
                alt="self-img"
              />
            </SelfImg>
            <Skills />
          </AboutLeft>
          <AboutRight>
            <Introwrapper>
              <h3>&ldquo; I am Shiho Nagano. &rdquo;</h3>
              <p>
                I am a front-end developer with an immense passion for
                programming and designing web sites and applications. I am a
                reliable, hard working, self motivated individual who works well
                with others.
                <br />
                In my latest role as a front end developer I designed a website,
                and also helped improve its overall functionality by
                contributing valuable insight to the team.
                <br />
                I am a team player who enjoys working with others. This has been
                attributed to my past experiences as a student and worker where
                working cohesively as a team was required. I thrive in a team
                environment and I have attained this in part through my previous
                career as a registered nurse, and through my recent work
                experiences in web development.
                <br />
                When working on team projects I always strive to improve the
                overall objectives. I share my thoughts about how design and
                functionality can be improved. I keep constant communication with
                all team members throughout projects ensuring everyone is up to
                date on the overrall progress and status and that the objectives
                are clear to everyone. I always provide assistance wherever
                possible.
                <br />
                One of my goals is to ensure that all web sites and applications
                that I create are as user friendly as possible. I am flexible
                and understand that the users needs change over time and I adapt
                the web sites and applications as needed to ensure the
                experience for the user is functional, smooth and seamless.
                <br />
                I am constantly trying to learn and improve my skills as I try
                and implement new and better ways to run applications and web
                sites.
                <br />
                I am passionate about coding and I particularly love building
                web sites and applications from scratch. I have been interested
                in coding since I was in high school when it was a hobby of
                mine. I soon realized that the more I learned about it the more
                I enjoyed it, and this is why I have decided to make this my
                career. I am excited to meet and work with others in the field
                who are as dedicated and passionate as I am.
                <br />
              </p>
              <Link to="/contact">
                <Button>CONTACT ME</Button>
              </Link>
            </Introwrapper>
          </AboutRight>
        </AboutContents>
      </AboutWrapper>
    </ThemeProvider>
  );
};

export default About;
