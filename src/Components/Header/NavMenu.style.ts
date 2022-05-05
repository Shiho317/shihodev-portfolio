import styled from "styled-components";

export const ShownButton = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  background: rgba(240, 229, 207, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  @media ${(props) => props.theme.device.laptop} {
    gap: 0;
    width: 80%;
    right: 10%;
    height: 5rem;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
  }
`;

export const NavButton = styled.div`
  & ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${(props) => props.theme.device.laptop} {
      flex-direction: row;
    }

    & li {
      list-style: none;
      font-size: 1.3rem;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
      }
    }

    & .resume {
      display: flex;
      align-items: center;
      background-color: rgba(200, 198, 198, 0.5);

      @media ${(props) => props.theme.device.laptop} {
        padding: 0 0.4rem;
        background-color: rgba(240, 229, 207, 0.5);
      }
    }
  }

  & a {
    color: ${(props) => props.theme.color.blue};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.color.grey};
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media ${(props) => props.theme.device.laptop} {
    gap: 2rem;
  }

  & .icons-wrap {
    width: 2rem;
    height: 2rem;
    border: 2px solid ${(props) => props.theme.color.grey};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.grey};
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    @media ${(props) => props.theme.device.laptop} {
      width: 2.3rem;
      height: 2.3rem;
      font-size: 1.3rem;
    }

    &:hover {
      transform: translateY(-4px);
      background-color: ${(props) => props.theme.color.blue};
    }
  }
`;
