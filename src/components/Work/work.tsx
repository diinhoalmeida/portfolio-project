import { useState } from "react";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import {
  workContainerStyles,
  workContentStyles,
  workTitleStyles,
  workSubtitleStyles,
  projectItemStyles,
  hoverOverlayStyles,
  projectButtonStyles,
} from "./styles/workStyles";
import { data } from "../../data/data";

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
    <Box id="work" {...workContainerStyles}>
      <Flex {...workContentStyles}>
        <Box pb="8">
          <h1>
            <Text {...workTitleStyles}>Projetos Pessoais</Text>
          </h1>
          <h2>
            <Text {...workSubtitleStyles}>
              // Dê uma olhada em meus projetos pessoais
            </Text>
          </h2>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="4"
        >
          {project.map((item, index) => (
            <Flex
              key={index}
              {...projectItemStyles}
              onMouseEnter={() => handleSelectWork(index)}
              onMouseLeave={handleClearWork}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Flex
                {...hoverOverlayStyles}
                projectHover={projectHover}
                bgColor={
                  projectHover === index ? "rgba(10,23,55,0.5)" : "inherit"
                }
                opacity={projectHover === index ? 5 : -100}
                index={index}
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
                  <a href={item.github} target="_blank">
                    <Button {...projectButtonStyles}>Code</Button>
                  </a>
                  <a href={item.live} target="_blank">
                    <Button {...projectButtonStyles}>Live</Button>
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
