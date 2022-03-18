import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import LandingHero from "./Hero/LandingHero";
import { LandingWrapper } from "./Landing.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";

const Landing = () => {
  return(
    <ThemeProvider theme={theme}>
      <LandingWrapper>
        <Header/>
        <LandingHero/>
        <Footer/>
      </LandingWrapper>
    </ThemeProvider>
  )
};

export default Landing;