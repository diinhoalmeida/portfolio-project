import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { listStyles, listItemStyles } from "../styles/menuStyles";

interface MenuProps {
  nav: boolean;
}

const Menu = ({ nav }: MenuProps) => {
  return (
    <UnorderedList
      {...listStyles}
      display={{ base: "none", md: !nav ? "flex" : "none" }}
    >
      <ListItem {...listItemStyles}>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </ListItem>
      <ListItem {...listItemStyles}>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </ListItem>
      <ListItem {...listItemStyles}>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </ListItem>
      <ListItem {...listItemStyles}>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
      </ListItem>
      <ListItem {...listItemStyles}>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Menu;
