import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  linkStyles,
  listItemStyles,
  socialIconsStyles,
} from "../styles/socialiconsStyle";

const SocialIcons = () => {
  return (
    <Flex {...socialIconsStyles}>
      <UnorderedList styleType="none">
        <ListItem
          {...listItemStyles}
          _hover={{ left: 0 }}
          bgColor={"blue.600"}
          transition="left 0.3s ease"
        >
          <a
            target="_blank"
            style={linkStyles}
            href="https://www.linkedin.com/in/edilson-almeida-2684a620a/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </ListItem>
        <ListItem {...listItemStyles} bgColor="#333333">
          <a
            target="_blank"
            style={linkStyles}
            href="https://github.com/diinhoalmeida"
          >
            Github <FaGithub size={30} />
          </a>
        </ListItem>
        <ListItem {...listItemStyles} bgColor="#6fc2b0">
          <a
            target="_blank"
            style={linkStyles}
            href="mailto:edifilho1409@outlook.com"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </ListItem>
        <ListItem {...listItemStyles} bgColor="#565f69">
          <a
            target="_blank"
            style={linkStyles}
            href="https://drive.google.com/drive/folders/1AFMvzase_RsHO0nX34k6PDzkv4a81iy2?usp=drive_link"
          >
            Currículo <BsFillPersonLinesFill size={30} />
          </a>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default SocialIcons;
