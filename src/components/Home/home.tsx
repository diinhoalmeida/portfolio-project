import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Flex name="home" w="full" h="full" bgColor="#0a192f">
      {/* Container */}
      <Flex
        maxW="1000px"
        mx="auto"
        px="8"
        flexDirection="column"
        justifyContent="center"
        h="full"
      >
        <Text textColor="pink.600">Hi, my name is</Text>
        <Text
          fontSize={{ base: "4xl", sm: "7xl" }}
          fontWeight="bold"
          textColor="#ccd6f6"
        >
          EDILSON ALMEIDA
        </Text>
        <Text
          fontSize={{ base: "4xl", sm: "7xl" }}
          fontWeight="bold"
          textColor="#8892b0"
        >
          I'm a Full Stack Developer.
        </Text>
        <Text textColor="#8892b0" py="4" maxW="700px">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </Text>
        <Box>
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            textColor="white"
            bgColor="#0a192f"
            borderColor="white"
            borderWidth="1px"
            px={6}
            py={3}
            my={2}
            display="flex"
            alignItems="center"
            _hover={{
              bgColor: "#B83280",
              borderColor: "#B83280",
              textColor: "",
            }}
          >
            View Work
            <Box
              display="inline-flex"
              alignItems="center"
              cursor="pointer"
              transform={hovered ? "rotate(90deg)" : "none"}
              transitionDuration="300ms"
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
