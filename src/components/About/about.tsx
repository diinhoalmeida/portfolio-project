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
                Oi. Eu sou Edilson Almeida, prazer em conhecê-lo. Por favor, dê
                uma olhada ao redor.
              </Text>
            </h2>
          </Box>
          <Box>
            <h2>
              <Text {...descriptionTextStyle}>
                Eu sou apaixonado por construir software excelente que melhora a
                vida das pessoas ao meu redor. Me especializo em criar software
                para clientes que vão desde indivíduos e pequenas empresas até
                grandes corporações empresariais. O que você faria se tivesse um
                especialista em software disponível ao alcance dos seus dedos?
              </Text>
            </h2>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default About;
