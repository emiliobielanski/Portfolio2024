import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-scroll";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:601px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, bgcolor: "#424242", height: "100%" }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map(({ label, to }, index) => (
          <ListItem button key={index} >
            <Link to={to} smooth={true} duration={500} >
              <ListItemText primary={label} onClick={handleDrawerToggle} primaryTypographyProps={{ color: "white" }} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ backgroundColor: "#424242" }}>
        <Toolbar
          sx={{ justifyContent: isMobile ? "flex-start" : "space-between", alignItems: "center" }}
        >
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="white"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ fill: "white"}}/>
              </IconButton>

              <Typography sx={{color: "white", marginLeft: "1rem" }}>
              Emilio Bielanski
              </Typography>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button>
                <Link to="landing" smooth={true} duration={500}>
                  <Typography color="white">Emilio Bielanski</Typography>
                </Link>
              </Button>

              <Box sx={{ display: "flex", gap: 3 }}>
                {navItems.map(({ label, to }, index) => (
                  <Button
                    key={index}
                    sx={{ "&:hover": { textDecoration: "4px underline grey" } }}
                  >
                    <Link to={to} smooth={true} duration={500}>
                      <Typography color="white">{label}</Typography>
                    </Link>
                  </Button>
                ))}
              </Box>

              <SocialLinks />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
