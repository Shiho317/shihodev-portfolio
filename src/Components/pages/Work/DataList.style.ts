import styled from "styled-components";

export const Project = styled.div`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.color.grey};

  & .explanation{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

export const Skill = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;

  & li{
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.color.grey};
    color: ${props => props.theme.color.beige};
    border-radius: 3px;
  }
`

export const Description = styled.ul`
  width: 90%;
  list-style: none;
  color: ${props => props.theme.color.blue};
  font-size: 1rem;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  & button{
    width: 10rem;
    height: 3rem;
    border: none;
    font-size: 1.1rem;
    border-radius: 5px;

    &:hover{
      background-color: ${props => props.theme.color.grey};
      color: ${props => props.theme.color.beige};
      transition: all 0.3s ease;
    }
  }

  & .github-link{
    background-color: ${props => props.theme.color.cream};
    color: ${props => props.theme.color.blue};
    cursor: pointer;
  }

  & .open-link{
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.beige};
    cursor: pointer;
  }
`

export const Demo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & img{
    width: 35rem;
    margin: 0 auto;
    cursor: pointer;
  }
`