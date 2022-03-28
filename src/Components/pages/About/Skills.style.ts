import styled from "styled-components";

export const SkillsWrapper = styled.div`
  width: 70%;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.color.blue};
  gap: 1rem;
  font-size: 1rem;

  @media ${props => props.theme.device.laptop} {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
`