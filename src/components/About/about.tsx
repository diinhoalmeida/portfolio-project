import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box name="about" w="full" h="full" bgColor="#0a192f" textColor="gray.300">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="full"
        h="full"
      >
        <Grid maxW="1000px" w="full" templateColumns="repeat(2, 1fr)" gap="8">
          <Box textAlign={{ base: "left", sm: "right" }} pb="8" pl="4">
            <Text
              fontSize="4xl"
              fontWeight="bold"
              display="inline"
              borderBottom="4px"
              borderColor="pink.600"
            >
              About
            </Text>
          </Box>
          <Box></Box>
        </Grid>
        <Grid
          maxW="1000px"
          w="full"
          templateColumns={{ sm: "repeat(2, 1fr)" }}
          gap="8"
          px="4"
        >
          <Box
            textAlign={{ base: "left", sm: "right" }}
            fontSize="4xl"
            fontWeight="bold"
          >
            <Text>
              Hi. I'm Edilson Almeida, nice to meet you. Please take a look
              around.
            </Text>
          </Box>
          <Box>
            <Text mt={3}>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default About;
