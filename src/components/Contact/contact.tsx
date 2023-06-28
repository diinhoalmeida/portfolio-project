import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex
      id="contact"
      w="100vw"
      h="100vh"
      bgColor="#0a192f"
      justifyContent="center"
      alignItems="center"
      p="4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9fcbb0e5-95d3-4f97-9b97-3355e24c58e0"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          width: "100%",
          gap: 20,
        }}
      >
        <Box pb="8">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            display="inline"
            borderBottom="4px"
            borderColor="pink.600"
            textColor="gray.300"
          >
            Contact
          </Text>
          <Text textColor="gray.300" py="4">
            // Submit the form below or shoot me an email -
            edifilho1409@outlook.com
          </Text>
        </Box>
        <input
          style={{ backgroundColor: "#ccd6f6", padding: 10 }}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          style={{ backgroundColor: "#ccd6f6", padding: 10 }}
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          style={{ backgroundColor: "#ccd6f6", padding: 10 }}
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <Button
          textColor="white"
          type="submit"
          borderWidth="1px"
          bgColor="#0a192f"
          _hover={{ bgColor: "#B83280", borderColor: "#B83280" }}
          mx="auto"
          borderColor="white"
          display="flex"
          alignItems="center"
        >
          Let's Collaborate
        </Button>
      </form>
    </Flex>
  );
};

export default Contact;
