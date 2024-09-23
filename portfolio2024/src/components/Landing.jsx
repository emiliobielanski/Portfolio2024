import { Box, Grid2, Typography } from "@mui/material";
import profileMe from "../assets/picture/profileMe.jpg";

export const Landing = () => {
  return (
    <Box id="landing" sx={{ marginTop: "64px", height: "60vh" }}>
      <Grid2
        container
        spacing={5}
        sx={{ padding: "10% 25%" }}
        alignItems="center"
      >
        <Grid2 item xs={12} sm={4} marginRight={8}>
          <Box
            component="img"
            sx={{
              height: "280px",
              width: "280px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "50%",
              boxShadow: "7"
            }}
            src={profileMe}
            alt="Profile picture of a handsome man"
          />
        </Grid2>

        <Grid2 item xs={12} sm={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "1.5rem",
                paddingBottom: "1rem"
              }}
            >
              Emilio Bielanski
            </Typography>
            <Typography sx={{ fontFamily: "Nunito", fontSize: "1.2rem" }}>
              Frontend Developer
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
