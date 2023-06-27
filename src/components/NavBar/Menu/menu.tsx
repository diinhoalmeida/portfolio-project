import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <UnorderedList
      display={{ base: "none", md: "flex" }}
      gap={14}
      styleType="none"
    >
      <ListItem
        borderWidth="1px"
        borderColor="#0a192f"
        px="4"
        py="2"
        _hover={{ borderColor: "white", rounded: "lg" }}
        cursor="pointer"
      >
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </ListItem>
      <ListItem
        borderWidth="1px"
        borderColor="#0a192f"
        px="4"
        py="2"
        _hover={{ borderColor: "white", rounded: "lg" }}
        cursor="pointer"
      >
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </ListItem>
      <ListItem
        borderWidth="1px"
        borderColor="#0a192f"
        px="4"
        py="2"
        _hover={{ borderColor: "white", rounded: "lg" }}
        cursor="pointer"
      >
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </ListItem>
      <ListItem
        borderWidth="1px"
        borderColor="#0a192f"
        px="4"
        py="2"
        _hover={{ borderColor: "white", rounded: "lg" }}
        cursor="pointer"
      >
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
      </ListItem>
      <ListItem
        borderWidth="1px"
        borderColor="#0a192f"
        px="4"
        py="2"
        _hover={{ borderColor: "white", rounded: "lg" }}
        cursor="pointer"
      >
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Menu;
