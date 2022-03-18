import styled from "styled-components";

export const HeaderWrapper = styled.div`
width: 100vw;
height: 5rem;
padding: 0 3rem;
background-color: ${props => props.theme.color.orange};
display: flex;
justify-content: space-between;
align-items: center;

.logo-wrapper{
  cursor: pointer;
}

.logo-wrapper img{
  width: 3.5rem;
}
`

export const NavButton = styled.div`
  & ul{
    display: flex;
    gap: 2rem;

    & li{
      list-style: none;
      font-size: 1.3rem;
      transition: all 0.3s ease;

      &:hover{
        transform: translateY(-4px);
      }
    }
  }

  & a{
    color: ${props => props.theme.color.yellow};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover{
      color: ${props => props.theme.color.red};
    }
  }
`