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

type Props ={
  onAnimation: boolean;
  showOwl: boolean;
}

const LandingHero: React.FC<Props> = ({onAnimation, showOwl}) => {

  const [ mouseX, setMouseX ] = useState(200);
  const [ mouseY, setMouseY ] = useState(200);

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
          <BubbleTwo style={!onAnimation ? {transform: 'rotate(-40deg)', top: '25%', left: '28%'} : {transform: 'rotate(0deg)', top: '30%', left: '20%'}}>
            <div className="card">
              <div className="front">
                <h4>Front-end developer</h4>
              </div>
              <div className="back">
                <div className="icon"><BiCodeAlt/></div>
              </div>
            </div>
          </BubbleTwo>
          <BubbleThree style={!onAnimation ? {transform: 'rotate(-50deg)', top: '25%', right: '28%'} : {transform: 'rotate(0deg)', top: '30%', right: '20%'}}>
            <div className="card">
              <div className="front">
                <h4>Web designer</h4>
              </div>
              <div className="back">
                <div className="icon"><BsLayoutWtf/></div>
              </div>
            </div>
          </BubbleThree>
          <BubbleFour style={!onAnimation ? {transform: 'rotate(-180deg)', bottom: '10rem', left: '35%'} : {transform: 'rotate(0deg)', bottom: '4rem', left: '10%'}}>
            <div className="card">
              <div className="front">
                <h4>React developer</h4>
              </div>
              <div className="back">
                <div className="icon"><FaReact/></div>
              </div>
            </div>
          </BubbleFour>
          <BubbleFive style={!onAnimation ? {transform: 'rotate(-40deg)', bottom: '10rem', right: '35%'} : {transform: 'rotate(0deg)', bottom: '4rem', right: '10%'}}>
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
        <Owl style={!showOwl ? {opacity: 0} : {opacity: 1}}>
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