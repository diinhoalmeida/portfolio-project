import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <UnorderedList
      display={{ base: "none", md: "flex" }}
      gap={14}
      styleType="none"
    >
      <ListItem>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </ListItem>
      <ListItem>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </ListItem>
      <ListItem>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
      </ListItem>
      <ListItem>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Menu;
