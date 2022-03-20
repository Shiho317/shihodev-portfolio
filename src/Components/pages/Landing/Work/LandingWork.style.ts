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
  width: 90%;
  display: flex;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: translateZ(60px);

  & .project{
    position: relative;
    width: 10rem;
    height: 60vh;
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    transition: all 0.5s ease;
    transform-style: preserve-3d;
    transform: rotateY(-60deg);
    cursor: pointer;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  }

  & .active{
    width: 100%;
    transform: rotateY(0deg);
  }

  & .prev{
    transform: rotateY(60deg);
  }
`

export const ProjectDetails = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 20px;

  & .project-type{
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }

  & .icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 1;
  }

  & .hidden{
    display: none;
    opacity: 0;
    transition: all 0.5s ease;
  }
`

export const ProjectIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  color: ${props => props.theme.color.blue};
  background-color: ${props => props.theme.color.beige};

  &:hover{
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`

export const Button = styled.button`
  position: relative;
  width: 17rem;
  height: 3.5rem;
  font-size: 1.3rem;
  font-weight: 600;
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