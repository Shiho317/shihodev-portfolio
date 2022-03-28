import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import { LandingWrapper } from "./Landing.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import LandingWork from "./Work/LandingWork";
import LandingAbout from "./About/LandingAbout";
import LandingContact from "./Contact/LandingContact";
import InitialMotion from "../InitialMotion/InitialMotion";
import Hero from "./Hero/Hero";

const Landing = () => {

  const [showInitialMotion, setShowInitialMotion ] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShowInitialMotion(false);
    }, 6000)
  }, [])

  return(
    <ThemeProvider theme={theme}>
      <InitialMotion showInitialMotion={showInitialMotion}/>
      {!showInitialMotion &&
      <LandingWrapper>
        {/* <Header/> */}
        <Hero/>
        <LandingWork/>
        <LandingAbout/>
        <LandingContact/>
        <Footer/>
      </LandingWrapper>
      }
    </ThemeProvider>
  )
};

export default Landing;