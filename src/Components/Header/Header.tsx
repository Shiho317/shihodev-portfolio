import { Link } from "react-router-dom";
import { HeaderWrapper, Wrapper } from "./Header.style";
import LogoSvg from "./Logo.svg";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";

const Header = () => {

  const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

  return(
    <Wrapper>
      <HeaderWrapper>
        <div className="logo-wrapper">
          <Link to='/'>
            <div className="logo-wrapper-img">
              <LogoSvg/>
            </div>
          </Link>
        </div>
      </HeaderWrapper>
      <NavMenu isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen}/>
      <HamburgerMenu isOpen={isHamburgerOpen} setOpen={setIsHamburgerOpen}/>
    </Wrapper>
  )
};

export default Header;