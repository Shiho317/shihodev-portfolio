import styled from "styled-components";

export const InitialMotionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.color.blue};
  overflow: hidden;
  opacity: 1;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
`

export const Intro = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1rem;
  color: ${props => props.theme.color.beige};

  @media ${props => props.theme.device.laptop} {
    width: 75%;
    font-size: 2rem;
  }
`

export const MyTitle = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.div`
  width: 3rem;
  height: 3rem;

  @media ${props => props.theme.device.laptop} {
    width: 5rem;
    height: 5rem;
  }

  & img{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: none;
    width: 3rem;

    @media ${props => props.theme.device.laptop} {
      width: 5rem;
    }
  }
`

export const AnimatedTitle = styled.div`
  width: 100%;

  & h1{
    width: 100%;
    position: absolute;
    top: 0;
    left: -45px;
    
    @media ${props => props.theme.device.laptop} {
      top: 0;
      left: 0;
    }
  }

  & .emphasize{
    color: ${props => props.theme.color.cream};
  }
`