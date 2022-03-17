import { Link } from "react-router-dom";
import { Wrapper } from "./Header.style";
import LogoSvg from "./Logo.svg";
import { SiDiscord } from 'react-icons/si';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Header = () => {
  return(
    <Wrapper>
      <div className="logo-wrapper">
        <LogoSvg/>
      </div>
      <div className="header-nav">
        <ul>
          <li>
            <Link to='/work'>
              &lt;work/&gt;
            </Link>
          </li>
          <li>
            <Link to='/about'>
              &lt;about/&gt;
            </Link>
          </li>
          <li>
            <Link to='/'>
              &lt;contact/&gt;
            </Link>
          </li>
          <li>
            <Link to='/'>
              &lt;resume/&gt;
            </Link>
          </li>
        </ul>
      </div>
      <div className="media-icons">
        <div className="icons-wrap">
          <FiLinkedin/>
        </div>
        <div className="icons-wrap">
          <SiDiscord/>
        </div>
        <div className="icons-wrap">
          <FiGithub/>
        </div>
        <div className="icons-wrap">
          <FiMail/>
        </div>
      </div>
    </Wrapper>
  )
};

export default Header;