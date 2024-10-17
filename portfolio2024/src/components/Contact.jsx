import { Box } from "@mui/material";
import TitleBreak from "./TitleBreak";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <TitleBreak title="Contact Me!" />
      <ContactForm />
    </Box>
  );
};
