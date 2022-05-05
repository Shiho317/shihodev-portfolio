import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContents = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${(props) => props.theme.device.laptop} {
    width: 60%;
  }

  & .cream-1 {
    position: absolute;
    top: 20%;
    left: 0;
    width: 30%;
    height: 25%;
    background-color: ${(props) => props.theme.color.cream};

    @media ${(props) => props.theme.device.laptop} {
      top: 7%;
    }
  }

  & .cream-2 {
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 30%;
    height: 25%;
    background-color: ${(props) => props.theme.color.cream};
  }

  & .blue-1 {
    position: absolute;
    bottom: 15%;
    right: 0;
    width: 20%;
    height: 40%;
    background-color: ${(props) => props.theme.color.blue};
  }
`;

export const ContactTitle = styled.div`
  & h1 {
    color: ${(props) => props.theme.color.blue};
    font-size: 1.5rem;
    text-align: center;

    @media ${(props) => props.theme.device.laptop} {
      font-size: 2rem;
    }
  }
`;

export const ContactInput = styled.form`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;

  @media ${(props) => props.theme.device.laptop} {
    gap: 2rem;
  }

  & input {
    height: 3.5rem;
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 0.5rem;
    outline: none;
    border: 1px solid ${(props) => props.theme.color.grey};
    box-shadow: 0 4px 4px ${(props) => props.theme.color.grey};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.3);

    @media ${(props) => props.theme.device.laptop} {
      font-size: 1rem;
    }
  }

  & textarea {
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 0.5rem;
    outline: none;
    border: 1px solid ${(props) => props.theme.color.grey};
    box-shadow: 0 4px 4px ${(props) => props.theme.color.grey};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.3);

    @media ${(props) => props.theme.device.laptop} {
      font-size: 1rem;
    }
  }
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 10rem;
  height: 2.5rem;
  font-size: 0.8rem;
  border: none;
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.beige};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  @media ${(props) => props.theme.device.laptop} {
    margin-bottom: 0;
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
