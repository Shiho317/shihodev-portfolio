import { useState } from "react";
import { 
  Eye, 
  BubbleOne, 
  BubbleTwo, 
  Eyeball, 
  HeroWrapper, 
  Owl, 
  OwlEyes, 
  Bubble, 
  BubbleThree, 
  BubbleFour, 
  BubbleFive
  } from "./LandingHero.style";
import owl from '../../../../assets/images/owl.svg';
import { BiCodeAlt } from 'react-icons/bi';
import { BsLayoutWtf } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';
import SmileMemoji from '../../../../assets/images/memoji-smile.png';

const LandingHero = () => {

  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);

  const onMouseMove = (e: any) => {
    setMouseX(e.screenX)
    setMouseY(e.screenY)
  }

  let eyeX = mouseX * 90 / window.innerWidth;
  let eyeY = mouseY * 90 / window.innerHeight;

  return(
      <HeroWrapper onMouseMove={(e) => onMouseMove(e)}>
        <Bubble>
          <BubbleOne>
            <div className="card">
              <div className="front">
                <h3 className="gradient-font">&ldquo;Hello! I am&rdquo;</h3>
              </div>
              <div className="back">
                
                <img src={SmileMemoji} alt="smile" />
                <h3>SHIHO</h3>
              </div>
            </div>
          </BubbleOne>
          <BubbleTwo>
            <div className="card">
              <div className="front">
                <h4>Front-end developer</h4>
              </div>
              <div className="back">
                <div className="icon"><BiCodeAlt/></div>
              </div>
            </div>
          </BubbleTwo>
          <BubbleThree>
            <div className="card">
              <div className="front">
                <h4>Web designer</h4>
              </div>
              <div className="back">
                <div className="icon"><BsLayoutWtf/></div>
              </div>
            </div>
          </BubbleThree>
          <BubbleFour>
            <div className="card">
              <div className="front">
                <h4>React developer</h4>
              </div>
              <div className="back">
                <div className="icon"><FaReact/></div>
              </div>
            </div>
          </BubbleFour>
          <BubbleFive>
            <div className="card">
              <div className="front">
                <h4>MERN stack developer</h4>
              </div>
              <div className="back">
                <div className="icons">
                  <SiMongodb/> 
                  <SiExpress/>
                  <FaReact/>
                  <SiNodedotjs/>
                </div>
              </div>
            </div>
          </BubbleFive>
        </Bubble>
        <Owl>
          <OwlEyes>
            <Eye>
              <Eyeball style={{left: `${eyeX}%`, top: `${eyeY}%`, transform: `translate(-${eyeX}%, -${eyeY}%)`}}>
              </Eyeball>
            </Eye>
            <Eye>
              <Eyeball style={{left: `${eyeX}%`, top: `${eyeY}%`, transform: `translate(-${eyeX}%, -${eyeY}%)`}}>
              </Eyeball>
            </Eye>
          </OwlEyes>
          <img src={owl} alt="owl" />
        </Owl>
        <div className="branch"></div>
      </HeroWrapper>
  )
};

export default LandingHero;