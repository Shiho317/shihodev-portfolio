import { 
  HeroWrapper, 
  HeroContents, 
  SvgStyle, 
  Geisha, 
  HeroTitle, 
  TitleContents, 
  Wagara 
} from "./Hero.style";
import WagaraSvg from "../../../Animation/Wagara.svg";
import GeishaSvg from "../../../Animation/Geisha.svg";
import CodingSvg from "../../../Animation/Coding.svg";

const Hero = () => {
  return(
    <HeroWrapper>
      <HeroContents>
        <SvgStyle>
          <Wagara>
            <WagaraSvg/>
          </Wagara>
          <Geisha>
            <div className="coding">
              <CodingSvg/>
            </div>
            <div className="geisha">
                <GeishaSvg/>
            </div>
          </Geisha>
        </SvgStyle>
        <HeroTitle>
          <TitleContents>
            <p>I AM</p>
            <h1>DEV<br/>ELO<br/>PER.</h1>
            <p>CODE - DESIGN</p>
          </TitleContents>
        </HeroTitle>
      </HeroContents>
    </HeroWrapper>
  )
};

export default Hero