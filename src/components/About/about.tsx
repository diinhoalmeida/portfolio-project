import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import {
  aboutContainerStyles,
  aboutTextStyle,
  aboutTextStyles,
  descriptionTextStyle,
  flexContainerStyles,
  gridContainerStyles,
  sectionTitleStyles,
} from "./styles/aboutStyles";

const About = () => {
  return (
    <Box {...aboutContainerStyles}>
      <Flex {...flexContainerStyles}>
        <Grid {...gridContainerStyles}>
          <Box {...aboutTextStyles}>
            <h1>
              <Text {...sectionTitleStyles}>About</Text>
            </h1>
          </Box>
          <Box></Box>
        </Grid>
        <Grid
          {...gridContainerStyles}
          templateColumns={{ sm: "repeat(2, 1fr)" }}
          px="4"
        >
          <Box {...aboutTextStyle}>
            <h2>
              <Text>
                Hi. I'm Edilson Almeida, nice to meet you. Please take a look
                around.
              </Text>
            </h2>
          </Box>
          <Box>
            <h2>
              <Text {...descriptionTextStyle}>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations. What would you do if
                you had a software expert available at your fingertips?
              </Text>
            </h2>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default About;
