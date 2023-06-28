import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import FireBase from "../../assets/firebase.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Typescript from "../../assets/typescript.png";
import Postgres from "../../assets/postgressql.png";
import Express from "../../assets/express.png";
import Chakra from "../../assets/chakra.png";
import Heroku from "../../assets/heroku.png";
import MaterialUi from "../../assets/materialui.png";
import Vercel from "../../assets/vercel.png";
import Vite from "../../assets/vite.png";
import PrismaOrm from "../../assets/prismaorm.png";
import ReactNative from "../../assets/reactnative.png";
import Mongo from "../../assets/mongo.png";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box name="skills" w="full" h="full" bgColor="#0a192f" textColor="gray.300">
      {/* Container */}
      <Flex
        maxW="1000px"
        mx="auto"
        p="4"
        flexDirection="column"
        justifyContent="center"
        w="full"
      >
        <Box>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            display="inline"
            borderBottom="4px"
            borderColor="pink.600"
          >
            Skills
          </Text>
          <Text py="4">// These are the technologies I've worked with</Text>
        </Box>

        <Grid
          w="full"
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          gap="4"
          textAlign="center"
          py="8"
        >
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={HTML} alt="HTML icon" />
            <Text my="4">HTML</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={CSS} alt="HTML icon" />
            <Text my="4">CSS</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={JavaScript} alt="HTML icon" />
            <Text my="4">JAVASCRIPT</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={ReactImg} alt="HTML icon" />
            <Text my="4">REACT</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={GitHub} alt="HTML icon" />
            <Text my="4">GITHUB</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Node} alt="HTML icon" />
            <Text my="4">NODE JS</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Mongo} alt="HTML icon" />
            <Text my="4">MONGO DB</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Tailwind} alt="HTML icon" />
            <Text my="4">TAILWIND</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={FireBase} alt="HTML icon" />
            <Text my="4">FIREBASE</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Typescript} alt="HTML icon" />
            <Text my="4">TYPESCRIPT</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="115px" mx="auto" src={Postgres} alt="HTML icon" />
            <Text my="4">POSTGRES</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Chakra} alt="HTML icon" />
            <Text my="4">CHAKRA UI</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Express} alt="HTML icon" />
            <Text my="4">EXPRESS</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={Vercel} alt="HTML icon" />
            <Text my="4">VERCEL</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={ReactNative} alt="HTML icon" />
            <Text my="4">REACT NATIVE</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="20" mx="auto" src={PrismaOrm} alt="HTML icon" />
            <Text my="4">PRISMAORM</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="140px" mx="auto" src={Vite} alt="HTML icon" />
            <Text my="4">VITE</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="100px" mx="auto" src={MaterialUi} alt="HTML icon" />
            <Text my="4">MATERIAL UI</Text>
          </Box>
          <Box
            shadow="md"
            boxShadow="#040c16"
            _hover={{ transform: "scale(1.1)", duration: "500ms" }}
          >
            <Image w="51px" mx="auto" src={Heroku} alt="HTML icon" />
            <Text my="4">HEROKU</Text>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Skills;
