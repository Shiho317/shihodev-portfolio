import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { LandingWrapper } from "./Landing.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import LandingHero from "./Hero/LandingHero";
import LandingWork from "./Work/LandingWork";
import LandingAbout from "./About/LandingAbout";
import LandingContact from "./Contact/LandingContact";
import InitialMotion from "../InitialMotion/InitialMotion";

const Landing = () => {

  const [showInitialMotion, setShowInitialMotion ] = useState(true);
  const [ onAnimation, setOnAnimation ] = useState(false);
  const [ showOwl, setShowOwl ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowInitialMotion(false);
      setOnAnimation(true);
      
      setTimeout(() => {
        setShowOwl(true)
      },500)
    }, 7000)
  }, [])

  return(
    <ThemeProvider theme={theme}>
      <InitialMotion showInitialMotion={showInitialMotion}/>
      {!showInitialMotion &&
      <LandingWrapper>
        <Header/>
        <LandingHero onAnimation={onAnimation} showOwl={showOwl}/>
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