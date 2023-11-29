import { Flex, Text, Button, Box } from "@chakra-ui/react";
import {
  buttonStyles,
  contactContainerStyles,
  formStyles,
  inputStyles,
  sectionSubtitleStyles,
  sectionTitleStyles,
} from "./styles/contactStyles";

const Contact = () => {
  return (
    <Flex {...contactContainerStyles}>
      <form
        method="POST"
        action="https://getform.io/f/9fcbb0e5-95d3-4f97-9b97-3355e24c58e0"
        style={formStyles}
      >
        <Box pb="8">
          <h1>
            <Text {...sectionTitleStyles}>Contato</Text>
          </h1>
          <h2>
            <Text {...sectionSubtitleStyles}>
              Complete o formulário abaixo ou me envie um e-mail -
              edifilho1409@outlook.com
            </Text>
          </h2>
        </Box>
        <input style={inputStyles} type="text" placeholder="Name" name="name" />
        <input
          style={inputStyles}
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          style={inputStyles}
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <Button {...buttonStyles}>Vamos trabalhar juntos!</Button>
      </form>
    </Flex>
  );
};

export default Contact;
