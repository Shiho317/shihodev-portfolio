import styled from "styled-components";

export const ProjectDetails = styled.div`
  position: relative;
  width: 18rem;
  height: 10rem;
  border: 2px solid ${(props) => props.theme.color.cream};
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.device.laptop} {
    width: 30rem;
    height: 15rem;

    &:hover{
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }

  & .project-img {
    width: 18rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media ${(props) => props.theme.device.laptop} {
      width: 30rem;
      height: 15rem;
    }

    & img {
      width: 100%;
    }
  }
`;

export const ProjectContents = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 0;
  width: 100%;
  height: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  border: 2px solid ${(props) => props.theme.color.cream};

  & .work-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.blue};
    font-size: 1rem;

    @media ${(props) => props.theme.device.laptop} {
      font-size: 1.5rem;

      &:hover {
        background-color: ${(props) => props.theme.color.blue};
        color: ${(props) => props.theme.color.beige};
        transition: all 0.3s ease;
      }
    }
  }
`;

export const ProjectIcon = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid ${(props) => props.theme.color.cream};
  color: ${(props) => props.theme.color.blue};
  font-size: 1rem;

  @media ${(props) => props.theme.device.laptop} {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`;
