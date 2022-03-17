import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import LandingHero from "./Hero/LandingHero";
import { Wrapper } from "./Landing.style";

const Landing = () => {
  return(
    <Wrapper>
      <Header/>
      <LandingHero/>
      <Footer/>
    </Wrapper>
  )
};

export default Landing;