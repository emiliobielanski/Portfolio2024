import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button } from "@mui/material";

export const ContactForm = () => {
  const form = useRef();
  const [formSuccess, setformSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8bc0xoe", "template_upaqz8f", form.current, {
        publicKey: "fCDTtLKZMe4kvh6GT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setformSuccess(true);
          setTimeout(() => setformSuccess(false), 6000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        marginBottom: "20rem",
      }}
    >
      {formSuccess && (
        <Box
          sx={{
            backgroundColor: "#0A5C36 ",
            fontFamily: "nunito",
            color: "white",
            border: "3px solid #14452F",
            fontSize: "24px",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Mail successfully sent!
        </Box>
      )}
      <TextField
        label="Name"
        variant="outlined"
        name="user_name"
        fullWidth
        required
      />

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        name="user_email"
        fullWidth
        required
      />

      <TextField
        label="Message"
        variant="outlined"
        name="message"
        multiline
        rows={4}
        fullWidth
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ backgroundColor: "grey", color: "white", fontWeight: "600" }}
      >
        Send
      </Button>
    </Box>
  );
};
