import { Box, Container, Grid2, Typography } from "@mui/material";
import laptop from "../assets/picture/laptop.png";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import TitleBreak from "./TitleBreak";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "3rem 1rem", md: "8rem 2rem" },
          marginTop: { xs: "10rem" },
        }}
      >
        <TitleBreak title="About" />

        <Grid2
          container
          sx={{
            boxShadow: "3",
            width: { xs: "90%", md: "60%" },
            height: { sm: "450px", xs: "700px" }, // Set a fixed height for the box
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",

            flexDirection: "row",
          }}
        >
          <Grid2 size={{ sx: 12, sm: 4 }}>
            <Box
              component="img"
              sx={{
                height: { xs: "225px", sm: "450px" },
                width: "100%",
                objectFit: "cover",
              }}
              src={laptop}
              alt="A laptop with code on it"
            />
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 8 }}>
            <Box
              sx={{
                padding: { xs: "1rem", md: "2rem" },
                display: { xs: "flex" },
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                A little about me
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  fontFamily: "Nunito",
                }}
              >
                I graduated a higher vocational education in Frontend
                Development at Jensen Yrkeshögskola in Sweden Stockholm in 2024.
                Currently I am searching for a developer focused role to hone my
                skills whilst building beautiful web services.
              </Typography>
                <br />
              <Box
                sx={{
                  maxHeight: isExpanded ? "150px" : "0px", // Limit the height of the expanded text
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    fontFamily: "Nunito",
                    display: isExpanded ? "block" : "none",
                  }}
                >
                  During my education, I got proficient in using the basics like
                  HTML, CSS and JS. We also built apps with React, Mobile apps
                  with Expo Go. During an internship of 3 months I also had the
                  pleasure of working with TypeScript.
                  <br />
                  I now work as a psychiatric care assistant within Northern Stockholms Psychiatry. In my free time, I am studying computer science through Harvards CS50 Resources and coding websites like these to continously learn more!
                </Typography>
              </Box>

              <Container
                sx={{
                  borderWidth: "2px 0 0 0",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(to right, transparent, #AAA9AD , transparent) 1",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 0",
                  margin: " 1rem 0",
                  cursor: "pointer",
                }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <motion.div
                  animate={{ rotateX: isExpanded ? 180 : 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                >
                  <IoIosArrowDown size={30} />
                </motion.div>
              </Container>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
