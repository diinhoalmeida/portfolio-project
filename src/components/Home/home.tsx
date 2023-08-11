import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
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
          <Text {...nameStyles}>Hi, my name is</Text>
          <Text {...titleStyles}>EDILSON ALMEIDA</Text>
          <Text {...subtitleStyles}>I'm a Full Stack Developer.</Text>
        </h1>
        <h2>
          <Text {...descriptionStyles}>
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </Text>
        </h2>
        <Box>
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...buttonStyles}
          >
            View Work
            <Box
              {...arrowStyles}
              transform={hovered ? "rotate(90deg)" : "none"}
            >
              <span style={{ marginLeft: 3 }}>
                <HiArrowNarrowRight />
              </span>
            </Box>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
