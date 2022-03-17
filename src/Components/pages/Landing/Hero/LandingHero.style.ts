import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
width: 100%;
height: 90vh;

.owl-img{
  position: absolute;
  left: 50%;
  bottom: 0.5rem;
  transform: translateX(-50%);
  z-index: 2;
  background-color: red;
}

.owl-img img{
  width: 15rem;
}

.eyes{
  position: relative;
  top: 7.1rem;
  display: flex;
  justify-content: center;
  margin-left: 0.2rem;
  gap: 1rem;
}

.left-eye,
.right-eye{
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: blue;
  opacity: 0.5;
}

.eyeball{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: black;
}

.branch{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  background-color: #ecb390;
}
`