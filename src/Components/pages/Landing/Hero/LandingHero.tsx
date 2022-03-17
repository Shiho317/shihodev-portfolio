import { Wrapper } from "./LandingHero.style";
import owl from '../../../../assets/images/owl.svg';

const LandingHero = () => {
  return(
    <Wrapper>
      <div className="owl-img">
        <div className="eyes">
          <div className="left-eye">
            <div className="eyeball"></div>
          </div>
          <div className="right-eye">
            <div className="eyeball"></div>
          </div>
        </div>
        <img src={owl} alt="owl" />
      </div>
      <div className="branch">
      </div>
    </Wrapper>
  )
};

export default LandingHero;