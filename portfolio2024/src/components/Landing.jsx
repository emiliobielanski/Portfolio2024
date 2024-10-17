import { Box, Grid2, Typography } from "@mui/material";
import profileMe from "../assets/picture/profileMe.jpg";
import { motion } from "framer-motion"; // Import framer-motion
import Typical from "react-typical"; // Import Typical for typing effect
import "../App.css";

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
      duration: 2, // Shortened duration for quicker load
    },
  },
};

const textVariant = {
  hidden: { x: 200, opacity: 0 }, // Starts off-screen on the right
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      duration: 2,
    },
  },
};

export const Landing = () => {
  return (
    <Box
      sx={{
        marginTop: { sm: "64px" },
        minHeight: "100vh",
        background: "linear-gradient(to bottom,#C8C6C4, #f9f9f9)",
        paddingBottom: "50px",
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{ padding: "5%" }}
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        {/* Profile Picture Section */}
        <Grid2 item xs={12} sm={4} textAlign="center">
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
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
              src={profileMe}
              alt="Profile picture of Emilio Bielanski"
            />
          </motion.div>
        </Grid2>

        {/* Name and Typical Text Section */}
        <Grid2 item xs={12} sm={6} marginBottom={"2rem"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
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
                  fontSize: { xs: "2rem", sm: "2.5rem" }, // Responsive font size
                  paddingBottom: "1rem",
                  color: "#333",
                }}
              >
                Emilio Bielanski
              </Typography>
            </motion.div>
            <Typography
              sx={{ fontFamily: "Nunito", fontSize: "1.2rem", color: "#555" }}
            >
              <Typical
                steps={[1300, "Frontend Developer"]}
                loop={1}
                wrapper="span"
              />
            </Typography>
          </Box>
        </Grid2>

        {/* Introductory Message Box */}
        <Grid2 item xs={12} sm={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1.3 }}
          >
            <Box
              sx={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "36px" }, // Responsive font size
                  fontFamily: "Nunito",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                I love learning stuff
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Nunito",
                  fontSize: { xs: "18px", sm: "20px" }, // Responsive font size
                  fontWeight: "400",
                  color: "#555",
                }}
              >
                I&apos;m passionate about programming, web development, design
                and its psychological ties, game development, music,
                role-playing games... In short; I love learning.
              </Typography>
            </Box>
          </motion.div>
        </Grid2>
      </Grid2>
    </Box>
  );
};
