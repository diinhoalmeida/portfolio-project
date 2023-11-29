import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  containerStyles,
  contentStyles,
  nameStyles,
  titleStyles,
  subtitleStyles,
  descriptionStyles,
  buttonStyles,
  arrowStyles,
} from "./styles/homeStyles";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Flex {...containerStyles}>
      <Flex {...contentStyles}>
        <h1>
          <Text {...nameStyles}>Olá, meu nome é</Text>
          <Text {...titleStyles}>EDILSON ALMEIDA</Text>
          <Text {...subtitleStyles}>Eu sou Full Stack Developer</Text>
        </h1>
        <h2>
          <Text {...descriptionStyles}>
            Sou um desenvolvedor full-stack especializado na criação (e
            ocasionalmente no design) de experiências digitais excepcionais.
            Atualmente, estou focado na construção de aplicações web full-stack
            responsivas.
          </Text>
        </h2>
        <Box>
          <Link to="work" smooth={true} duration={500}>
            <Button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              {...buttonStyles}
            >
              Ver projetos
              <Box
                {...arrowStyles}
                transform={hovered ? "rotate(90deg)" : "none"}
              >
                <span style={{ marginLeft: 3 }}>
                  <HiArrowNarrowRight />
                </span>
              </Box>
            </Button>
            Início
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
