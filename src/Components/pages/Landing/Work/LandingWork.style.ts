import styled from "styled-components";

export const WorkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const Projects = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  overflow: scroll;

  @media ${(props) => props.theme.device.tablet} {
    padding: 1rem;
    width: 100%;
    height: 20rem;
    flex-direction: row;
    gap: 2rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    height: 25rem;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 10rem;
  height: 2.5rem;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.beige};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  @media ${(props) => props.theme.device.laptop} {
    width: 15rem;
    height: 3rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`;
