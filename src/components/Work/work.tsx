import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { data } from "../../data/data";
import { useState } from "react";

const Work = () => {
  const [projectHover, setProjectHover] = useState<number>();

  const project = data;

  const handleSelectWork = (id: number) => {
    setProjectHover(id);
  };
  const handleClearWork = () => {
    setProjectHover(undefined);
  };

  return (
    <Box name="work" w="100vw" textColor="gray.300" bgColor="#0a192f">
      <Flex
        maxW="1000px"
        mx="auto"
        p="4"
        flexDirection="column"
        justifyContent="center"
        w="full"
        h="full"
      >
        <Box pb="8">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            display="inline"
            borderBottom="4px"
            textColor="gray.300"
            borderColor="pink.600"
          >
            Work
          </Text>
          <Text py="6">// Check out some of my recent work</Text>
        </Box>

        {/* container for projects */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="4"
        >
          {/* Grid Item */}
          {project.map((item, index) => (
            <Flex
              key={index}
              boxShadow="#040c16"
              shadow="lg"
              w={{ base: "300px", md: "full" }}
              h="200px"
              mx="auto"
              rounded="md"
              onMouseEnter={() => handleSelectWork(index)}
              onMouseLeave={handleClearWork}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* Hover effect for images */}
              <Flex
                justifyContent="center"
                textAlign="center"
                alignContent="center"
                flexDirection="column"
                bgColor={
                  projectHover === index ? "rgba(10,23,55,0.5)" : "inherit"
                }
                opacity={projectHover === index ? 5 : -100}
                w="full"
                h="full"
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.name}
                </span>
                <Box pt="8" textAlign="center">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <Button
                      textAlign="center"
                      rounded="lg"
                      px="4"
                      py="3"
                      m="2"
                      bgColor="white"
                      textColor="gray.700"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      Code
                    </Button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <Button
                      textAlign="center"
                      rounded="lg"
                      px="4"
                      py="3"
                      m="2"
                      bgColor="white"
                      textColor="gray.700"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      Live
                    </Button>
                  </a>
                </Box>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Work;
