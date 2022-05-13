import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.beige};
`;

export const AboutContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${(props) => props.theme.device.laptop} {
    flex-direction: row;
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media ${(props) => props.theme.device.tablet} {
    gap: 2rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    flex: 1;
    gap: 3rem;
  }

  & .title {
    width: 100%;
    height: 10rem;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.cream};

    @media ${(props) => props.theme.device.laptop} {
      height: 15rem;
    }

    & h1 {
      text-align: start;
      font-size: 2rem;
      color: ${(props) => props.theme.color.blue};

      @media ${(props) => props.theme.device.laptop} {
        font-size: 4.5rem;
      }
    }
  }
`;

export const SelfImg = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;

  @media ${(props) => props.theme.device.tablet} {
    width: 10rem;
    height: 10rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    width: 20rem;
    height: 20rem;
  }

  & img {
    width: 7.5rem;
    transition: all 0.5s ease;

    @media ${(props) => props.theme.device.tablet} {
      width: 10rem;
    }

    @media ${(props) => props.theme.device.laptop} {
      width: 20rem;
    }
  }
`;

export const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.device.laptop} {
    flex: 1;
  }
`;

export const Introwrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${(props) => props.theme.device.tablet} {
    gap: 2rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    align-items: start;
    gap: 1rem;
  }

  & h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.blue};

    @media ${(props) => props.theme.device.laptop} {
      font-size: 1.8rem;
    }
  }

  & p {
    height: 10rem;
    overflow: scroll;
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.blue};

    @media ${(props) => props.theme.device.tablet} {
      height: 50%;
    }

    @media ${(props) => props.theme.device.laptop} {
      height: 80%;
      font-size: 1.1rem;
    }
  }
`;

export const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  margin-bottom: 2rem;
  font-size: 0.8rem;
  border: none;
  background-color: ${(props) => props.theme.color.cream};
  color: ${(props) => props.theme.color.blue};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  @media ${(props) => props.theme.device.tablet} {
    margin: 2rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    width: 15rem;
    height: 3rem;
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.beige};
    transition: all 0.3s ease;
  }
`;
