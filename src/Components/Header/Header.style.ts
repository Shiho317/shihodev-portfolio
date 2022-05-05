import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  @media ${(props) => props.theme.device.laptop} {
    padding: 0 3rem;
  }

  & .logo-wrapper-img {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;

    @media ${(props) => props.theme.device.laptop} {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

export const HamburgerWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
