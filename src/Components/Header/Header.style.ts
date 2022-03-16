import styled from "styled-components";

export const Wrapper = styled.div`
width: 100vw;
height: 5rem;
padding: 0 3rem;
background-color: #ecb390;
display: flex;
justify-content: space-between;
align-items: center;

.logo-wrapper{

}

.logo-wrapper img{
  width: 3.5rem;
}

.header-nav{

}

.header-nav ul {
  display: flex;
  gap: 2rem;
}

.header-nav li{
  list-style: none;
  font-size: 1.3rem;
}

.header-nav a{
  color: #f5eedc;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.5s ease;
}

.header-nav li a:hover{
  color: #dd4a48;
}
`