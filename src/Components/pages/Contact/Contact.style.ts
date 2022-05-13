import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.beige};
`;

export const ContactContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.device.laptop} {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;

export const ContactTitles = styled.div`
  background-color: ${(props) => props.theme.color.cream};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  padding-top: 2.5rem;

  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
    height: 50vh;
    justify-content: center;
  }

  @media ${(props) => props.theme.device.laptop} {
    height: 50%;
    width: unset;
    padding-top: 0rem;
    gap: 1rem;
  }

  & .titles-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media ${(props) => props.theme.device.laptop} {
      gap: 0rem;
    }

    & h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.color.blue};

      @media ${(props) => props.theme.device.tablet} {
        font-size: 3rem;
      }

      @media ${(props) => props.theme.device.laptop} {
        font-size: 4.5rem;
      }
    }

    & p {
      font-size: 0.8rem;
      margin: 0;
      color: ${(props) => props.theme.color.blue};

      @media ${(props) => props.theme.device.laptop} {
        font-size: 1.1rem;
      }
    }
  }

  & .icons-wrapper {
    & .borders {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.color.grey};

      & .border {
        border: none;
        width: 40%;
        height: 1px;
        background-color: ${(props) => props.theme.color.grey};

        @media ${(props) => props.theme.device.laptop} {
          height: 2px;
        }
      }

      & p {
        font-size: 0.8rem;
        color: ${(props) => props.theme.color.grey};

        @media ${(props) => props.theme.device.laptop} {
          font-size: 1.1rem;
        }
      }
    }

    & p {
      font-size: 0.8rem;
      margin: 1rem;
      color: ${(props) => props.theme.color.blue};

      @media ${(props) => props.theme.device.laptop} {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Icons = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1rem;

  & .icons-wrap {
    width: 2rem;
    height: 2rem;
    border: 2px solid ${(props) => props.theme.color.blue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.blue};
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    @media ${(props) => props.theme.device.laptop} {
      width: 2.3rem;
      height: 2.3rem;
      border: 2px solid ${(props) => props.theme.color.blue};
      font-size: 1.3rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.color.blue};
      color: ${(props) => props.theme.color.cream};
    }
  }
`;
