import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.blue};
  padding: 1rem;

  @media ${props => props.theme.device.laptop} {
    height: 50vh;
    flex-direction: row;
  }
`

export const NameTitle = styled.div`
  
  & h1{
    font-size: 2rem;
    line-height: 2.5rem;
    color: ${props => props.theme.color.beige};

    @media ${props => props.theme.device.laptop} {
      font-size: 3rem;
      line-height: 5rem;
    }
  }
`

export const DetailsAboutMe = styled.div`
  height: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media ${props => props.theme.device.laptop} {
    height: 100%;
  }

  & h3{
    line-height: 2rem;
  }

  & .about-me{
    color: ${props => props.theme.color.grey};

    & h3{
      font-weight: 400;
      font-size: 1.1rem;
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
      color: ${props => props.theme.color.blue};
    }

    & button{
      width: 10rem;
      height: 2.5rem;
      font-size: 0.8rem;
      background-color: ${props => props.theme.color.cream};
      color: ${props => props.theme.color.blue};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

      @media ${props => props.theme.device.laptop} {
        width: 15rem;
        height: 3rem;
        font-size: 1.2rem;
      }

      &:hover{
        color: ${props => props.theme.color.blue};
        background-color: ${props => props.theme.color.grey};
        transition: all 0.3s ease;
      }
    }
  }
`