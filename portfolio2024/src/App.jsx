import { Box } from "@mui/material";
import "./App.css";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Box>
     
      <Navbar />
      <Box id="landing">
        <Landing />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <ScrollToTop />
    
    </Box>
  );
}

export default App;
