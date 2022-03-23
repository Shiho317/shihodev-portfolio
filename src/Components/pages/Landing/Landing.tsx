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

  return(
    <ThemeProvider theme={theme}>
      <InitialMotion/>
      <LandingWrapper>
        <Header/>
        <LandingHero/>
        <LandingWork/>
        <LandingAbout/>
        <LandingContact/>
        <Footer/>
      </LandingWrapper>
    </ThemeProvider>
  )
};

export default Landing;