import { Link } from "react-router-dom";
import { HeaderWrapper, Icons, NavButton } from "./Header.style";
import LogoSvg from "./Logo.svg";
import { SiDiscord } from 'react-icons/si';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { MdSaveAlt } from 'react-icons/md';

const Header = () => {

  return(
      <HeaderWrapper>
        <div className="logo-wrapper">
          <Link to='/'>
            <div className="logo-wrapper-img">
              <LogoSvg/>
            </div>
          </Link>
        </div>
        <NavButton>
          <ul>
            <li>
              <Link to='/work'>
                work
              </Link>
            </li>
            <li>
              <Link to='/about'>
                about
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                contact
              </Link>
            </li>
            <li>
              <Link to='/' className="resume">
                <p>resume</p>
                <MdSaveAlt/>
              </Link>
            </li>
          </ul>
        </NavButton>
        <Icons>
          <a href="https://www.linkedin.com/in/shiho-nagano-b7518b21b" target="_blank" rel="noopener noreferrer">
            <div className="icons-wrap">
              <FiLinkedin/>
            </div>
          </a>
          <a href="https://discord.gg/XGhFwCnS" target="_blank" rel="noopener noreferrer">
            <div className="icons-wrap">
              <SiDiscord/>
            </div>
          </a>
          <a href="https://github.com/Shiho317" target="_blank" rel="noopener noreferrer">
            <div className="icons-wrap">
              <FiGithub/>
            </div>
          </a>
          <a href="mailto:shihonagano9797@gmail.com">
            <div className="icons-wrap">
              <FiMail/>
            </div>
          </a>
        </Icons>
      </HeaderWrapper>
  )
};

export default Header;