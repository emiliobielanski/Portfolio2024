import { Box, Grid2, Typography } from "@mui/material";
import profileMe from "../assets/picture/profileMe.jpg";
import { motion } from "framer-motion"; // Import framer-motion
import Typical from "react-typical"; // Import Typical for typing effect

// Variants for image animation
const imageVariant = {
  hidden: { x: -200, opacity: 0 }, // Starts off-screen on the left
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring", // Adds spring-like motion
      stiffness: 60,
      damping: 20,
      duration: 5,
    },
  },
};
const textVariant = {
  hidden: { x: 200, opacity: 0 }, // Starts off-screen on the left
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring", // Adds spring-like motion
      stiffness: 60,
      damping: 20,
      duration: 5,
    },
  },
};

export const Landing = () => {
  return (
    <Box  sx={{ marginTop: "64px", height: "60vh" }}>
      <Grid2
        container
        spacing={5}
        sx={{ padding: "10% 25%" }}
        alignItems="center"
      >
        <Grid2 item xs={12} sm={4} marginRight={8}>
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
          >
            <Box
              component="img"
              sx={{
                height: "280px",
                width: "280px",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "50%",
                boxShadow: "7",
              }}
              src={profileMe}
              alt="Profile picture of a handsome man"
            />
          </motion.div>
        </Grid2>

        <Grid2 item xs={12} sm={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              <Typography
              variant="h1"
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  paddingBottom: "1rem",
                }}
              >
                Emilio Bielanski
              </Typography>
            </motion.div>
            <Typography sx={{ fontFamily: "Nunito", fontSize: "1.2rem" }}>
              <Typical
                steps={[1300, "Frontend Developer"]} // Text and typing delay
                loop={1} // Type once
                wrapper="span" // Wrap in span
              />
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
