import { Box } from "@mui/material";
import "./App.css";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About.Jsx";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Box >
      <Navbar />
      <Landing />
      <About />
      <Contact />
      <Projects />
    </Box>
  );
}

export default App;
