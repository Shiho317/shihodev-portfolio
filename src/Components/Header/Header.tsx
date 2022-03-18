import { Link } from "react-router-dom";
import { HeaderWrapper, NavButton } from "./Header.style";
import LogoSvg from "./Logo.svg";

const Header = () => {
  return(
      <HeaderWrapper>
        <div className="logo-wrapper">
          <LogoSvg/>
        </div>
        <NavButton>
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
        </NavButton>
      </HeaderWrapper>
  )
};

export default Header;