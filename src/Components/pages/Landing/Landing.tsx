import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { LandingWrapper } from "./Landing.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import LandingHero from "./Hero/LandingHero";
import LandingWork from "./Work/LandingWork";
import LandingAbout from "./About/LandingAbout";

const Landing = () => {
  return(
    <ThemeProvider theme={theme}>
      <LandingWrapper>
        <Header/>
        <LandingHero/>
        <LandingWork/>
        <LandingAbout/>
        <Footer/>
      </LandingWrapper>
    </ThemeProvider>
  )
};

export default Landing;