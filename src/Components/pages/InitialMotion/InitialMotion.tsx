import { AnimatedTitle, InitialMotionWrapper, Intro, LogoImg, MyTitle } from "./InitialMotion.style";
import logo from '../../../assets/images/shihoN-logo.svg';
import { motion } from "framer-motion";

type Props = {
  showInitialMotion: boolean;
}

const InitialMotion:React.FC<Props> = ({showInitialMotion}) => {

  return(
    <InitialMotionWrapper style={!showInitialMotion ? {opacity: 0, transform: 'translateY(-100%)'} : {top: 0}}>
      <Intro>
        <h1>HELLO! I AM</h1>
        <MyTitle>
          <LogoImg>
            <motion.img src={logo} alt="logo"
              animate={{rotate: [0, 90, 0, 0], rotateX: [0, 0, 180, 0], opacity: [0, 1, 1, 1], display: 'block'}}
              transition={{duration: 6, delay: 0, ease: 'easeInOut'}}/>
          </LogoImg>
          <AnimatedTitle>
            <motion.h1 
              style={{opacity: 0}} 
              animate={{x: 100, opacity: 1}} 
              transition={{duration: 1, delay: 1, ease: 'easeInOut', repeat: 1, repeatType: 'reverse'}}>
              HIHO
            </motion.h1>
            <motion.h1
              style={{opacity: 0}} 
              animate={{x: 100, opacity: 1}} 
              transition={{duration: 1, delay: 3, ease: 'easeInOut', repeat: 1, repeatType: 'reverse'}}>
              AGANO
            </motion.h1>
            <motion.h1
              className="emphasize"
              style={{opacity: 0}} 
              animate={{x: 100, opacity: 1}} 
              transition={{duration: 1, delay: 5, ease: 'easeInOut'}}>
              A FRONT-END DEVELOPER
            </motion.h1>
          </AnimatedTitle>
        </MyTitle>
      </Intro>
    </InitialMotionWrapper>
  )
};

export default InitialMotion;