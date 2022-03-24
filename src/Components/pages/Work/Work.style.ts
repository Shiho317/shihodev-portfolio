import styled from "styled-components";

export const WorkWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.beige};
`

export const WorkContents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WorkTitles = styled.div`
  width: 100%;

  & .title{
    width: 100%;
    height: 10rem;
    display: grid;
    align-items: center;
    background-color: ${props => props.theme.color.cream};

    & h1{
      text-align: center;
      font-size: 4.5rem;
      color: ${props => props.theme.color.blue};
    }
  }
`

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
`

