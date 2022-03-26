import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 90vh;
`

export const HeroContents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SvgStyle = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  flex: 1;
  display: flex;
  background-color: ${props => props.theme.color.cream};
  z-index: 3;
`

export const Wagara = styled.div`
  flex: 1;
`

export const Geisha = styled.div`
  position: relative;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  & .coding{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .geisha{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
  }

`

export const HeroTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  & p{
    color: ${props => props.theme.color.grey};
  }

  & h1{
    color: ${props => props.theme.color.blue};
    font-size: 5rem;
  }
`