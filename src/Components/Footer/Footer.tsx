import { FooterWrapper } from "./Footer.style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterWrapper>
        <p>Copyright ©2022. ShihoN.Dev All Rights Reserved.</p>
      </FooterWrapper>
    </ThemeProvider>
  );
};

export default Footer;
