import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.orange}
`

export const NameTitle = styled.div`
  
  & h1{
    font-size: 3rem;
    line-height: 5rem;
  }
`

export const DetailsAboutMe = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & h3{
    line-height: 2rem;
  }

  & .to-about-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & h3{
      background-color: ${props => props.theme.color.green};
      padding: 0 1rem;
    }

    & button{
      font-size: 1.2rem;
      width: 15rem;
      height: 3rem;
      background-color: ${props => props.theme.color.yellow};
      color: ${props => props.theme.color.orange};
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

      &:hover{
        color: ${props => props.theme.color.yellow};
        background-color: ${props => props.theme.color.green};
        transition: all 0.3s ease;
      }
    }
  }
`