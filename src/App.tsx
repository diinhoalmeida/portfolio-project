import { Box } from "@chakra-ui/react";
import { About, Home, NavBar, Skills, Work } from "./components";

function App() {
  return (
    <Box>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
    </Box>
  );
}

export default App;
