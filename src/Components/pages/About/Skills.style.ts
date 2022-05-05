import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 90%;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.color.blue};
  gap: 0.3rem;
  font-size: 1rem;

  @media ${(props) => props.theme.device.laptop} {
    width: 70%;
    font-size: 3rem;
    margin-bottom: 5rem;
    gap: 0.8rem;
  }
`;

export const Skill = styled.div`
  padding: 0 0.3rem;
  height: 1.5rem;
  border: 2px solid ${(props) => props.theme.color.blue};
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.device.laptop} {
    padding: 0 0.8rem;
    height: 2rem;
    font-size: 1rem;
  }
`;
