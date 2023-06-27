import { Box } from "@chakra-ui/react";
import { About, Home, NavBar, Skills } from "./components";

function App() {
  return (
    <Box>
      <NavBar />
      <Home />
      <About />
      <Skills />
    </Box>
  );
}

export default App;
