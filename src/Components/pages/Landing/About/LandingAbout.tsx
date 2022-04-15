import { Link } from "react-router-dom";
import { 
  AboutWrapper, 
  DetailsAboutMe, 
  NameTitle
  } from "./LandingAbout.style";

const LandingAbout = () => {
  return(
    <AboutWrapper>
      <NameTitle>
        <h1>Shiho Nagano,<br/>Front-end Developer</h1>
      </NameTitle>
      <DetailsAboutMe>
        <div className="about-me">
          <h3>Hi. I'm a Front-end Developer.</h3>
          <h3>Web programming and designing give me opportunities to learn, rewarding and joyful.</h3>
          <h3>I am looking for opportunities to work as a front-end developer.</h3>
        </div>
        <div className="to-about-btn">
          <h3>\ Interested in ME?? Let me tell you about me more!! /</h3>
          <Link to='/about'>
            <button>ABOUT ME</button>
          </Link>
        </div>
      </DetailsAboutMe>
    </AboutWrapper>
  )
};

export default LandingAbout;