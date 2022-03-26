import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.beige};
`

export const AboutContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const AboutLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  & .title{
    width: 100%;
    height: 15rem;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.cream};

    & h1{
      text-align: start;
      font-size: 4.5rem;
      color: ${props => props.theme.color.blue};
    }
  }
`

export const SelfImg = styled.div`
  width: 20rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% 80% 70% 50% / 40% 80% 70% 60%;
  background-color: ${props => props.theme.color.cream};

  & img{
    width: 20rem;
    transition: all 0.5s ease;
  }
`

export const AboutRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Introwrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  & h3{
    font-size: 2rem;
    color: ${props => props.theme.color.blue};
  }

  & p{
    font-size: 1.1rem;
    color: ${props => props.theme.color.blue};
  }
`

export const Button = styled.button`
  width: 15rem;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  background-color: ${props => props.theme.color.cream};
  color: ${props => props.theme.color.blue};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  &:hover{
    background-color: ${props => props.theme.color.grey};
    color: ${props => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`