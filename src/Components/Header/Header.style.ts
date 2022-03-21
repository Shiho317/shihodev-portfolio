import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 5rem;
  padding: 0 3rem;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  & .logo-wrapper{
      flex: 1;
    }

  & .logo-wrapper-img{
      cursor: pointer;
      width: 3.5rem;
    }
`

export const NavButton = styled.div`
  flex: 1;
  
  & ul{
    display: flex;
    gap: 2rem;

    & li{
      list-style: none;
      font-size: 1.3rem;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover{
        transform: translateY(-4px);
      }
    }

    & .resume{
      display: flex;
      align-items: center;
      padding: 0 0.4rem;
      background-color: rgba(240,229,207,0.5);
    }
  }

  & a{
    color: ${props => props.theme.color.grey};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover{
      color: ${props => props.theme.color.blue};
    }
  }
`

export const Icons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 2rem; 

  & .icons-wrap{
    width: 2.3rem;
    height: 2.3rem;
    border: 2px solid ${props => props.theme.color.grey};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color.grey};
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
      transform: translateY(-4px);
      background-color: ${props => props.theme.color.blue};
    }
  }
`