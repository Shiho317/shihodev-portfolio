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
  transition: all 0.5s ease;
`

export const Intro = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 2rem;
  color: ${props => props.theme.color.beige};
`

export const MyTitle = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.div`
  width: 5rem;
  height: 5rem;

  & img{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: none;
    width: 5rem;
  }
`

export const AnimatedTitle = styled.div`
  width: 100%;

  & h1{
    position: absolute;
    top: 0;
    left: 0;
  }

  & .emphasize{
    color: ${props => props.theme.color.cream}
  }
`