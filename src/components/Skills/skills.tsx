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
import { Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const technologies = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JavaScript", image: JavaScript },
  { name: "React", image: ReactImg },
  { name: "Node.js", image: Node },
  { name: "Firebase", image: FireBase },
  { name: "GitHub", image: GitHub },
  { name: "Tailwind CSS", image: Tailwind },
  { name: "TypeScript", image: Typescript },
  { name: "PostgreSQL", image: Postgres },
  { name: "Express", image: Express },
  { name: "Chakra UI", image: Chakra },
  { name: "Heroku", image: Heroku },
  { name: "Material UI", image: MaterialUi },
  { name: "Vercel", image: Vercel },
  { name: "Vite", image: Vite },
  { name: "Prisma ORM", image: PrismaOrm },
  { name: "React Native", image: ReactNative },
  { name: "MongoDB", image: Mongo },
];

const Skills = () => {
  return (
    <Flex id="skills" w="full" h="full" bgColor="#0a192f" textColor="gray.300">
      <Flex
        maxW="1000px"
        mx="auto"
        p="4"
        flexDirection="column"
        justifyContent="center"
        w="full"
      >
        <h1>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            display="inline"
            borderBottom="4px"
            borderColor="pink.600"
          >
            Skills
          </Text>
        </h1>
        <h2>
          <Text py="4">// These are the technologies I've worked with</Text>
        </h2>

        <UnorderedList
          display="grid"
          gridTemplateColumns={"repeat(3, 1fr)"}
          gap={"4"}
          textAlign={"center"}
          py={"8"}
          padding={0}
          listStyleType={"none"}
        >
          {technologies.map((tech) => (
            <ListItem
              key={tech.name}
              boxShadow={"md"}
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              transition={"transform 500ms"}
              _hover={{
                boxShadow: "md",
                transform: "scale(1.1)",
                transition: "transform 500ms",
              }}
            >
              <Image
                w="20"
                mx="auto"
                src={tech.image}
                alt={`${tech.name} icon`}
              />
              <Text my="4">{tech.name}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default Skills;
