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
  flex: 1;
  cursor: pointer;
}

.logo-wrapper img{
  width: 3.5rem;
}

.header-nav{
  flex: 1;
}

.header-nav ul {
  display: flex;
  gap: 2rem;
}

.header-nav li{
  list-style: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.header-nav li:hover{
  transform: translateY(-4px);
}

.header-nav a{
  color: #f5eedc;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.header-nav a:hover{
  color: #dd4a48;
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