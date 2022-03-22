import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { ContactContents, ContactTitles, ContactWrapper, Icons } from "./Contact.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/Theme";
import ContactForm from "../Landing/Contact/ContactForm";
import { SiDiscord } from 'react-icons/si';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
  return(
    <ThemeProvider theme={theme}>
      <ContactWrapper>
          <Header/>
            <ContactContents>
              <ContactTitles>
                <div className="titles-wrapper">
                  <h1>Contact<br/>Me.</h1>
                  <p>Ask me anything.<br/>I would like to tell you about myself.</p>
                </div>
                <div className="icons-wrapper">
                  <div className="borders">
                    <hr className="border"/>or<hr className="border"/>
                  </div>
                  <p>You can get in touch with me via my social</p>
                  <Icons>
                    <a href="https://www.linkedin.com/in/shiho-nagano-b7518b21b" target="_blank" rel="noopener noreferrer">
                      <div className="icons-wrap">
                        <FiLinkedin/>
                      </div>
                    </a>
                    <a href="https://discord.gg/XGhFwCnS" target="_blank" rel="noopener noreferrer">
                      <div className="icons-wrap">
                        <SiDiscord/>
                      </div>
                    </a>
                    <a href="https://github.com/Shiho317" target="_blank" rel="noopener noreferrer">
                      <div className="icons-wrap">
                        <FiGithub/>
                      </div>
                    </a>
                    <a href="mailto:shihonagano9797@gmail.com">
                      <div className="icons-wrap">
                        <FiMail/>
                      </div>
                    </a>
                  </Icons>
                </div>
              </ContactTitles>
              <ContactForm/>
            </ContactContents>
          <Footer/>
      </ContactWrapper>
    </ThemeProvider>
  )
};

export default Contact