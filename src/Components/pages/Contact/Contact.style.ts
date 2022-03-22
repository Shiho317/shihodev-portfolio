import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.beige};
`

export const ContactContents = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`

export const ContactTitles = styled.div`
  background-color: ${props => props.theme.color.cream};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  & .titles-wrapper{
    
    & h1{
      font-size: 4.5rem;
      color: ${props => props.theme.color.blue};
    }

    & p{
      font-size: 1.1rem;
      margin: 0;
      color: ${props => props.theme.color.blue};
    }
  }

  & .icons-wrapper{

    & .borders{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${props => props.theme.color.grey};

      & .border{
        border: none;
        width: 40%;
        height: 2px;
        background-color: ${props => props.theme.color.grey};
      }
    }
    
    & p{
      margin: 1rem;
      color: ${props => props.theme.color.blue};
    }
  }
`

export const Icons = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1rem; 

  & .icons-wrap{
    width: 2.3rem;
    height: 2.3rem;
    border: 2px solid ${props => props.theme.color.blue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color.blue};
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
      background-color: ${props => props.theme.color.blue};
      color: ${props => props.theme.color.cream};
    }
}
`