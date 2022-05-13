import styled from "styled-components";

export const Project = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  border-bottom: 1px solid ${(props) => props.theme.color.grey};
  padding: 1rem;

  @media ${(props) => props.theme.device.laptop} {
    display: flex;
    width: 90%;
    height: 50vh;
    flex-direction: row;
  }

  & .explanation {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Skill = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  @media ${(props) => props.theme.device.laptop} {
    flex-wrap: nowrap;
    gap: 1rem;
  }

  & li{
    padding: 0.5rem;
    background-color: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.beige};
    border-radius: 3px;
    font-size: 0.8rem;

    @media ${(props) => props.theme.device.laptop} {
      padding: 0.5rem; 1rem;
      font-size: 1rem;
    }
  }
`;

export const Description = styled.ul`
  width: 90%;
  list-style: none;
  color: ${(props) => props.theme.color.blue};
  font-size: 0.8rem;

  @media ${(props) => props.theme.device.laptop} {
    font-size: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media ${(props) => props.theme.device.laptop} {
    gap: 2rem;
  }

  & button {
    width: 7rem;
    height: 2rem;
    border: none;
    font-size: 0.8rem;
    border-radius: 5px;

    @media ${(props) => props.theme.device.laptop} {
      width: 10rem;
      height: 3rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.color.grey};
      color: ${(props) => props.theme.color.beige};
      transition: all 0.3s ease;
    }
  }

  & .github-link {
    background-color: ${(props) => props.theme.color.cream};
    color: ${(props) => props.theme.color.blue};
    cursor: pointer;
  }

  & .open-link {
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.beige};
    cursor: pointer;
  }
`;

export const Demo = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.device.laptop} {
    flex: 1;
  }

  & img {
    width: 60%;
    margin: 0 auto;
    cursor: pointer;

    @media ${(props) => props.theme.device.laptop} {
      width: 35rem;
    }
  }
`;
