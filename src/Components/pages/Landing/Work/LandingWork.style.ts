import styled from "styled-components";

export const WorkWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  overflow: hidden;
`

export const Projects = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  

  @media ${props => props.theme.device.laptop} {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    perspective: 1000px;
    transform-style: preserve-3d;
    transform: translateZ(60px);
  }

  & .project{
    position: relative;
    width: 50%;
    height: 9.5vh;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    transition: all 0.5s ease;
    cursor: pointer;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transform-style: flat;
    transform: rotateY(0);
    
    @media ${props => props.theme.device.laptop} {
      width: 10rem;
      height: 60vh;
      transform-style: preserve-3d;
      transform: rotateY(-60deg);
      border-radius: 10px;
    }
  }

  & .active{
    width: 100%;
    height: 25vh;
    transform: rotateY(0deg);

    @media ${props => props.theme.device.laptop} {
      width: 100%;
      height: 100%;
    }
  }

  & .prev{
    transform: rotateY(0deg);

    @media ${props => props.theme.device.laptop} {
      transform: rotateY(60deg);
    }
  }
`

export const Button = styled.button`
  position: relative;
  width: 15rem;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background-color: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.beige};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  &:hover{
    background-color: ${props => props.theme.color.grey};
    color: ${props => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`