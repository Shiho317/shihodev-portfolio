import { Spiral as Hamburger } from "hamburger-react";
import { HamburgerWrap } from "./Header.style";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const HamburgerMenu: React.FC<Props> = ({ isOpen, setOpen }) => {
  const onToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerWrap>
      <Hamburger
        direction="left"
        color="#4b6587"
        size={25}
        duration={0.3}
        toggled={isOpen}
        onToggle={onToggle}
      />
    </HamburgerWrap>
  );
};

export default HamburgerMenu;
