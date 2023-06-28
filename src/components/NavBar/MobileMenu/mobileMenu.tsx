import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-scroll";

interface MobileMenuProps {
  nav: boolean;
  handleClick: () => void;
}

const MobileMenu = ({ nav, handleClick }: MobileMenuProps) => {
  return (
    <UnorderedList
      display={!nav ? "none" : "flex"}
      position="absolute"
      ml={0}
      top={0}
      w="100vw"
      h="100vh"
      bgColor="#0a192f"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textColor="gray.200"
      styleType="none"
    >
      <ListItem py={6} fontSize="4xl">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
      </ListItem>
      <ListItem py={6} fontSize="4xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
      </ListItem>
      <ListItem py={6} fontSize="4xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </ListItem>
      <ListItem py={6} fontSize="4xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
      </ListItem>
      <ListItem py={6} fontSize="4xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default MobileMenu;
