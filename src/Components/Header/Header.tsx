import { Link } from "react-router-dom";
import { Wrapper } from "./Header.style";
import LogoSvg from "./Logo.svg";

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
    </Wrapper>
  )
};

export default Header;