import { Box } from "@chakra-ui/react";
import { About, Contact, Home, NavBar, Skills, Work } from "./components";

function App() {
  return (
    <Box>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </Box>
  );
}

export default App;
