import styled from "styled-components";

export const ProjectDetails = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.color.cream};

  & .project-img{
    width: 100%;

    & img{
      width: 100%;

      @media ${props => props.theme.device.laptop} {
        width: 40rem;
      }

      @media ${props => props.theme.device.laptopL} {
        width: 45rem;
      }

      @media ${props => props.theme.device.desktop} {
        width: 86rem;
      }
    }
  }

  & .project-type{
    display: none;

    @media ${props => props.theme.device.laptop} {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
  }

  & .icons{
    width: 100%;
    height: 100%;
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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  font-size: 1rem;
  color: ${props => props.theme.color.blue};
  background-color: ${props => props.theme.color.beige};

  @media ${props => props.theme.device.laptop} {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }

  @media ${props => props.theme.device.desktop} {
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
  }

  &:hover{
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`