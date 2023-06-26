import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialIcons = () => {
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      pos="fixed"
      flexDirection="column"
      top="35%"
      left={-5}
    >
      <UnorderedList styleType="none">
        <ListItem
          w={160}
          h={20}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgColor="blue.600"
          position="relative"
          left="-85px"
          _hover={{ left: 0 }}
          transition="left 0.3s ease"
        >
          <a
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              color: "#CBD5E0",
              paddingLeft: 20,
              paddingRight: 20,
            }}
            href="/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </ListItem>
        <ListItem
          w={160}
          h={20}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          left="-85px"
          _hover={{ left: 0 }}
          transition="left 0.3s ease"
          bgColor="#333333"
        >
          <a
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              color: "#CBD5E0",
              paddingLeft: 20,
              paddingRight: 20,
            }}
            href="/"
          >
            Github <FaGithub size={30} />
          </a>
        </ListItem>
        <ListItem
          w={160}
          h={20}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          left="-85px"
          _hover={{ left: 0 }}
          transition="left 0.3s ease"
          bgColor="#6fc2b0"
        >
          <a
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              color: "#CBD5E0",
              paddingLeft: 20,
              paddingRight: 20,
            }}
            href="/"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </ListItem>
        <ListItem
          w={160}
          h={20}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgColor="#565f69"
          position="relative"
          left="-85px"
          _hover={{ left: 0 }}
          transition="left 0.3s ease"
        >
          <a
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              color: "#CBD5E0",
              paddingLeft: 20,
              paddingRight: 20,
            }}
            href="/"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default SocialIcons;
