import { Link } from 'react-router-dom';
import { Icons, NavButton, ShownButton } from './NavMenu.style';
import { SiDiscord } from 'react-icons/si';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { MdSaveAlt } from 'react-icons/md';

type Props = {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: any;
}

const NavMenu: React.FC<Props> = ({isHamburgerOpen, setIsHamburgerOpen}) => {
  return(
    <ShownButton style={{
      transform: isHamburgerOpen ? 'translateX(0%)' : 'translateX(120%)', 
      visibility: isHamburgerOpen ? 'visible' : 'hidden'}}>
      <NavButton>
        <ul>
          <li onClick={() => setIsHamburgerOpen(false)}>
            <Link to='/work'>
            work
            </Link>
          </li>
          <li onClick={() => setIsHamburgerOpen(false)}>
            <Link to='/about'>
            about
            </Link>
          </li>
          <li onClick={() => setIsHamburgerOpen(false)}>
            <Link to='/contact'>
            contact
            </Link>
          </li>
          <li onClick={() => setIsHamburgerOpen(false)}>
            <a href='ShihoNagano-Résumé.pdf' download='ShihoNagano-Résumé.pdf' className="resume">
              resume
              <MdSaveAlt/>
            </a>
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
    </ShownButton>
  )
};

export default NavMenu