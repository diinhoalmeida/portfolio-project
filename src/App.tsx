import { Box } from "@chakra-ui/react";
import { About, Home, NavBar } from "./components";

function App() {
  return (
    <Box h="100vh" w="100vw">
      <NavBar />
      <Home />
      <About />
    </Box>
  );
}

export default App;
