import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.blue};
`

export const NameTitle = styled.div`
  
  & h1{
    font-size: 3rem;
    line-height: 5rem;
    color: ${props => props.theme.color.beige}
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

  & .about-me{
    color: ${props => props.theme.color.grey};

    & h3{
      font-weight: 400;
    }
  }

  & .to-about-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & h3{
      background-color: ${props => props.theme.color.cream};
      padding: 0 1rem;
    }

    & button{
      font-size: 1.2rem;
      width: 15rem;
      height: 3rem;
      background-color: ${props => props.theme.color.cream};
      color: ${props => props.theme.color.blue};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

      &:hover{
        color: ${props => props.theme.color.blue};
        background-color: ${props => props.theme.color.grey};
        transition: all 0.3s ease;
      }
    }
  }
`