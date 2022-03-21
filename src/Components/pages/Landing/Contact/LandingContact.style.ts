import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactContents = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & .cream-1{
    position: absolute;
    top: 7%;
    left: 0;
    width: 30%;
    height: 25%;
    background-color: ${props => props.theme.color.cream};
  }

  & .cream-2{
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 30%;
    height: 25%;
    background-color: ${props => props.theme.color.cream};
  }

  & .blue-1{
    position: absolute;
    bottom: 15%;
    right: 0;
    width: 20%;
    height: 40%;
    background-color: ${props => props.theme.color.blue};
  }

`

export const ContactTitle = styled.div`
  & h1{
    color: ${props => props.theme.color.blue}
  }
`

export const ContactInput = styled.form`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;

  & input{
    height: 3.5rem;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.5rem;
    outline: none;
    border: 1px solid ${props => props.theme.color.grey};
    box-shadow: 0 4px 4px ${props => props.theme.color.grey};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.3);
  }

  & textarea{
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.5rem;
    outline: none;
    border: 1px solid ${props => props.theme.color.grey};
    box-shadow: 0 4px 4px ${props => props.theme.color.grey};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.3);
  }
`

export const SubmitButton = styled.button`
  margin: 1rem auto;
  width: 15rem;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  background-color: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.beige};
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

