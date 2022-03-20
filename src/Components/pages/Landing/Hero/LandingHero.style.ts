import styled from "styled-components";

export const HeroWrapper = styled.div`
position: relative;
width: 100%;
height: 90vh;

& .branch{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  background-color: ${props => props.theme.color.cream};
}
`

export const Bubble = styled.div`
  & h3{
    font-size: 1.5rem;
    color: white;
    transform: translateZ(60px);
  }

  & h4{
    font-size: 1rem;
    color: white;
    transform: translateZ(60px);
  }
`

export const BubbleOne = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;
  height: 15rem;
  border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;
  perspective: 1000px;
  cursor: pointer;

  .card{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    width: 100%;
    border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;
    transition: all 0.5s ease;
  }

  .front{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;
    transform-style: preserve-3d;
    background-color: ${props => props.theme.color.grey};
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;

    .gradient-font{
      background: linear-gradient(to bottom, #2a5470, #4c4177);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #2a5470, #4c4177);
    border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    backface-visibility: hidden;
    transform: rotateX(180deg);
    

    & img{
      width: 10rem;
      transform: translateZ(60px);
    }
  }

  &:hover .card{
    transform: rotateX(180deg);
  }
`

export const BubbleTwo = styled.div`
  position: absolute;
  top: 35%;
  left: 20%;
  transform: translateY(-35%);
  width: 12rem;
  height: 12rem;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  perspective: 1000px;
  cursor: pointer;

  .card{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    width: 100%;
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    transition: all 0.5s ease;
  }

  .front{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    transform-style: preserve-3d;
    background-color: ${props => props.theme.color.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
  }

  .back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #2a5470, #4c4177);
    border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform: rotateX(180deg);

    .icon{
      font-size: 3rem;
      color: white;
      transform: translateZ(60px);
    }
  }

  &:hover .card{
    transform: rotateX(180deg);
  }
`

export const BubbleThree = styled.div`
  position: absolute;
  top: 35%;
  right: 20%;
  transform: translateY(-35%);
  width: 12rem;
  height: 12rem;
  border-radius: 70% 50% 50% 70% / 40% 80% 40% 80%;
  cursor: pointer;
  perspective: 1000px;

  .card{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    width: 100%;
    border-radius: 70% 50% 50% 70% / 40% 80% 40% 80%;
    transition: all 0.5s ease;
  }

  .front{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 70% 50% 50% 70% / 40% 80% 40% 80%;
    transform-style: preserve-3d;
    background-color: ${props => props.theme.color.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
  }

  .back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #2a5470, #4c4177);
    border-radius: 70% 50% 50% 70% / 40% 80% 40% 80%;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform: rotateX(180deg);

    .icon{
      font-size: 3rem;
      color: white;
      transform: translateZ(60px);
    }
  }

  &:hover .card{
    transform: rotateX(180deg);
  }
`

export const BubbleFour = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 10%;
  width: 12rem;
  height: 12rem;
  border-radius: 50% 30% 70% 30% / 60% 40% 60% 30%;
  perspective: 1000px;
  cursor: pointer;

  .card{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    width: 100%;
    border-radius: 50% 30% 70% 30% / 60% 40% 60% 30%;
    transition: all 0.5s ease;
  }

  .front{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50% 30% 70% 30% / 60% 40% 60% 30%;
    transform-style: preserve-3d;
    background-color: ${props => props.theme.color.grey};
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
  }

  .back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #2a5470, #4c4177);
    border-radius: 50% 30% 70% 30% / 60% 40% 60% 30%;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform: rotateX(180deg);

    .icon{
      font-size: 3rem;
      color: white;
      transform: translateZ(60px);
    }
  }

  &:hover .card{
    transform: rotateX(180deg);
  }
`

export const BubbleFive = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 10%;
  width: 12rem;
  height: 12rem;
  border-radius: 50% 30% 30% 50% / 60% 40% 60% 30%;
  perspective: 1000px;
  cursor: pointer;

  .card{
    position: relative;
    transform-style: preserve-3d;
    height: 100%;
    width: 100%;
    border-radius: 50% 30% 30% 50% / 60% 40% 60% 30%;
    transition: all 0.5s ease;
  }

  .front{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50% 30% 30% 50% / 60% 40% 60% 30%;
    transform-style: preserve-3d;
    background-color: ${props => props.theme.color.grey};
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
  }

  .back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #2a5470, #4c4177);
    border-radius: 50% 30% 30% 50% / 60% 40% 60% 30%;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform: rotateX(180deg);

    .icons{
      display: flex;
      gap: 0.2rem;
      font-size: 2rem;
      color: white;
      transform: translateZ(60px);
    }
  }

  &:hover .card{
    transform: rotateX(180deg);
  }
`

export const Owl = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0.3rem;
  transform: translateX(-50%);
  z-index: 2;
  
  & img{
    width: 18rem;
  }
`

export const OwlEyes = styled.div`
  position: relative;
  top: 8.5rem;
  display: flex;
  justify-content: center;
  margin-left: 0.2rem;
  gap: 1.3rem;
`

export const Eye = styled.div`
  position: relative;
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
`

export const Eyeball = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  background-color: black;
`