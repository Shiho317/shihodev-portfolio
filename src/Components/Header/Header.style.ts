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
  flex: 1;
  cursor: pointer;
}

.logo-wrapper img{
  width: 3.5rem;
}

.media-icons{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.icons-wrap{
  width: 2.3rem;
  height: 2.3rem;
  border: 2px solid #f5eedc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5eedc;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icons-wrap:hover{
  transform: translateY(-4px);
  background-color: #c0d8c0;
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

