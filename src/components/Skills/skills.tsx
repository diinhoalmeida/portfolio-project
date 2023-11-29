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
import {
  skillsContainerStyles,
  skillsContentStyles,
  skillsSubtitleStyles,
  skillsTitleStyles,
  technologiesListStyles,
  technologyImageStyles,
  technologyListItemStyles,
} from "./styles/skillStyles";

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
    <Flex id="skills" {...skillsContainerStyles}>
      <Flex {...skillsContentStyles}>
        <h1>
          <Text {...skillsTitleStyles}>Skills</Text>
        </h1>
        <h2>
          <Text {...skillsSubtitleStyles}>
            // These are the technologies I've worked with
          </Text>
        </h2>

        <UnorderedList {...technologiesListStyles}>
          {technologies.map((tech) => (
            <ListItem key={tech.name} {...technologyListItemStyles}>
              <Image
                {...technologyImageStyles}
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
