import { Link } from "react-router-dom";
import { AboutWrapper, DetailsAboutMe, NameTitle } from "./LandingAbout.style";

const LandingAbout = () => {
  return (
    <AboutWrapper>
      <NameTitle>
        <h1>
          Shiho Nagano,
          <br />
          Front-end Developer
        </h1>
      </NameTitle>
      <DetailsAboutMe>
        <div className="about-me">
          <h3>Hi. I'm a front-end developer who is highly skilled at web programming and designing.</h3>
          <h3>
            I have vast experiences and specialization in React.
          </h3>
          <h3>
            I am looking for opportunities to learn and improve my skills.
          </h3>
        </div>
        <div className="to-about-btn">
          <h3>\ Interested in ME?? Let me tell you about me more!! /</h3>
          <Link to="/about">
            <button>ABOUT ME</button>
          </Link>
        </div>
      </DetailsAboutMe>
    </AboutWrapper>
  );
};

export default LandingAbout;
