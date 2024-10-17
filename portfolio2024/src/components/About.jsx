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
        }}
      >
        <TitleBreak title="About" />

        <Grid2
          container
          sx={{
            boxShadow: "3",
            width: { xs: "90%", md: "60%" },
            height: { xs: "auto", md: "440px" },
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            overflow: "hidden",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid2
            item
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: { xs: "100%", sm: "480px" },
                width: { xs: "100%", md: "100%" },
                objectFit: "cover",
                margin: { xs: "0 auto", md: 0 },
              }}
              src={laptop}
              alt="A laptop with code on it"
            />
          </Grid2>

          {/* Text Section */}
          <Grid2
            item
            size={{ xs: 12, md: 8 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "center",
              padding: { xs: "1rem", md: "2rem" },
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
              I graduated a higher vocational education in Frontend Development
              at Jensen Yrkeshögskola in Sweden Stockholm in 2024. Currently, I
              am searching for a developer-focused role to hone my skills whilst
              building beautiful web services.
            </Typography>

            <br />

            <Box
              sx={{
                maxHeight: isExpanded ? "480px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.5s ease",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  fontFamily: "Nunito",
                }}
              >
                During my education, I got proficient in using the basics like
                HTML, CSS, and JS. We also built apps with React, mobile apps
                with Expo Go. During an internship of 3 months, I also had the
                pleasure of working with TypeScript.
                <br />I now work as a psychiatric care assistant within Northern
                Stockholm Psychiatry. In my free time, I am studying computer
                science through Harvard&apos;s CS50 Resources and coding
                websites like these to continuously learn more!
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
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
