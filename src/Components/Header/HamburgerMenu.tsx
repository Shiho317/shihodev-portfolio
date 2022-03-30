import { Spiral as Hamburger } from 'hamburger-react';
import { HamburgerWrap } from './Header.style';

type Props = {
  isOpen: boolean;
  setOpen: any;
}

const HamburgerMenu: React.FC<Props> = ({isOpen, setOpen}) => {
  return(
    <HamburgerWrap>
    <Hamburger toggled={isOpen} toggle={setOpen} direction="left" color='#4b6587' size={25} duration={0.3}/>
    </HamburgerWrap>
  )
};

export default HamburgerMenu