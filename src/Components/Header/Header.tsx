import { Link } from "react-router-dom";
import { HeaderWrapper } from "./Header.style";
import LogoSvg from "./Logo.svg";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

const Header = () => {

  const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

  const [ positionTop, setPositionTop ] = useState(false);

  useEffect(() => {
    const topOffset = () => {
      const topY = window.pageYOffset;
      if(topY > 10){
        setPositionTop(true)
      }else if(topY <= 10){
        setPositionTop(false)
      }
    };
    window.addEventListener('scroll', topOffset)
  },[setPositionTop])

  return(
    <ThemeProvider theme={theme}>
      <HeaderWrapper style={{background: positionTop ? 'rgba(255, 255, 255, 0.3)' : 'transparent', backdropFilter: positionTop? 'blur(4px)' : 'blur(0px)'} }>
        <div className="logo-wrapper">
          <Link to='/'>
            <div className="logo-wrapper-img">
              <LogoSvg/>
            </div>
          </Link>
        </div>
        <NavMenu isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen}/>
        <HamburgerMenu isOpen={isHamburgerOpen} setOpen={setIsHamburgerOpen}/>
      </HeaderWrapper>
    </ThemeProvider>
  )
};

export default Header;