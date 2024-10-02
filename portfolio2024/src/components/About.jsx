import { Box, Grid2, Typography } from "@mui/material";
import laptop from "../assets/picture/laptop.png";
export const About = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "center",
          marginTop: "10rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "50px", fontFamily: "Nunito", marginTop: "4rem" }}
        >
          About
        </Typography>
        <Box
          sx={{
            width: "60%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #424242, transparent)",
          }}
        ></Box>

        <Grid2
          container
          sx={{
            boxShadow: "3",
            minHeight: "50%",
            width: "50%",
            marginTop: "5rem",
          }}
        >
          <Grid2 size={4}>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "25%",
              }}
              src={laptop}
              alt="Profile picture of a handsome man"
            />
          </Grid2>

          <Grid2 item size={8}>
            <Typography
              sx={{
                textAlign: "center",
                padding: "2rem",
                fontFamily: "nunito",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              A little about me
            </Typography>
            <Typography sx={{ textAlign: "center", fontFamily: "nunito" }}>
              I am a creative and passionate frontend developer with a drive to
              constantly learn. I seek new and exciting challenges where i can
              apply my own skills to problem solve whilst developing my
              repertoire of both technical and personal knowledge.
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "nunito",
                  padding: "1rem",
                }}
              >
                I graduated a higher vocational education within Frontend
                Development in Stockholm, Sweden 2024. Currently working as a
                psychiatric care assistant where I have learnt alot about
                greeting and treating patients with psychiatric needs, I am now
                searching for a developer-focused role. With my education in
                Frontend Development and skills in React, React Native,
                TypeScript and JavaScript I hope to find an environment where
                learning and challenging myself will be a daily occurence.
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
