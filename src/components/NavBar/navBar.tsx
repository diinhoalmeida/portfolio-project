import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo1.png";
import { Box, Flex, Image } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu/mobileMenu";
import SocialIcons from "./SocialIcons/socialIcons";
import Menu from "./Menu/menu";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <Flex
      pos="fixed"
      w="full"
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      bgColor="#0a192f"
      textColor="gray.200"
    >
      <Box>
        <Image src={Logo} alt="Logo Image" w={70} />
      </Box>

      {/* menu */}
      <Menu />

      {/* Hamburger */}
      <Box
        cursor="pointer"
        display={{ md: "hidden" }}
        zIndex={10}
        onClick={handleClick}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </Box>

      {/* Mobile menu */}
      <MobileMenu nav={nav} handleClick={handleClick} />

      {/* Social icons */}
      <SocialIcons />
    </Flex>
  );
};

export default NavBar;
