import { AppBar, Toolbar, Typography, Button, Box, Grid2 } from "@mui/material";
import { Link } from "react-scroll";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";
import "./SocialLinks";
import SocialLinks from "./SocialLinks";


const theme = createTheme({
  palette: {
    primary: {
      main: "#424242", 
    },
    text: {
      primary: "#ffffff", 
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    color: "white",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
          color: "white",
        },
      },
    },
  },
});

const navItems = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];
export const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          backgroundColor: "#424242",
          color: "white",
          display: { xs: "none", sm: "block", md: "block" },
        }}
      >
        <Toolbar>
          <Grid2
            container
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { sm: "row" },
            }}
          >
            <Grid2 item size={1} sx={{ whiteSpace: "nowrap" }}>
              <Button>
                <Link to="landing" smooth={true} duration={500}>
                  <Typography color="white">Emilio Bielanski</Typography>
                </Link>
              </Button>
            </Grid2>

            <Grid2 container gap={10} >
              {navItems.map(({ label, to }, index) => (
                <Box key={index}>
                  <Button sx={{ textTransform: "none", fontSize: "1rem", "&:hover": {textDecoration: "4px underline grey"} }}>
                    <Link to={to} smooth={true} duration={500}>
                      <Typography color="white">{label}</Typography>
                    </Link>
                  </Button>
                </Box>
              ))}
            </Grid2>

            <SocialLinks />
          </Grid2>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
