import { Link } from "react-router-dom";
import { HeaderWrapper } from "./Header.style";
import LogoSvg from "./Logo.svg";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";

const Header = () => {

  const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

  return(
      <HeaderWrapper>
        <div className="logo-wrapper">
          <Link to='/'>
            <div className="logo-wrapper-img">
              <LogoSvg/>
            </div>
          </Link>
        </div>
        <NavMenu isHamburgerOpen={isHamburgerOpen}/>
        <HamburgerMenu isOpen={isHamburgerOpen} setOpen={setIsHamburgerOpen}/>
      </HeaderWrapper>
  )
};

export default Header;