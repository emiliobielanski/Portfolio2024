import { AppBar, Toolbar, Typography, Button, Box, Grid2 } from "@mui/material";
import { Link } from "react-scroll";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#424242", // Background color for AppBar
    },
    text: {
      primary: "#ffffff", // Default text color
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
          color: "#ffffff", // Default button text color
        },
      },
    },
  },
});
export const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          backgroundColor: "#424242",
          color: "white",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Toolbar sx={{ color: "white" }}>
          <Typography
            fontFamily={"nunito"}
            fontWeight={500}
            marginRight={"20%"}
            marginLeft={"10rem"}
            color="textPrimary"
          >
            Emilio Bielanski
          </Typography>
          <Grid2
            container
            sx={{

              display: "flex",
              justifyContent: "space-between",
              flexDirection: { sm: "row" },
              gap: {sm: 15, xs: 0 },
            }}
          >
            <Box>
              <Button sx={{ textTransform: "none", fontSize: "1rem" }}>
                <Link to="about" smooth={true} duration={500}>
                  <Typography sx={{ color: "white" }}>About</Typography>
                </Link>
              </Button>
            </Box>
            <Box>
              <Button sx={{ textTransform: "none", fontSize: "1rem" }}>
                <Link to="projects" smooth={true} duration={500}>
                  <Typography sx={{ color: "white" }}>Projects</Typography>
                </Link>
              </Button>
            </Box>
            <Box>
              <Button sx={{ textTransform: "none", fontSize: "1rem" }}>
                <Link to="contact" smooth={true} duration={500}>
                  <Typography sx={{ color: "white" }}>Contact</Typography>
                </Link>
              </Button>
            </Box>
          </Grid2>
          <Box>
            <Button
              href="https://www.linkedin.com/in/emilio-bielanski-345499273/"
              sx={{ color: "white" }}
            >
              <LinkedInIcon style={{ fill: "white" }} />
            </Button>
          </Box>
          <Box>
            <Button href="https://github.com/emiliobielanski">
              <GitHubIcon style={{ fill: "white" }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
