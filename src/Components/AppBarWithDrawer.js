import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";


const drawerWidth = 240;
const navItems = ["Home", "Services", "Projects Gallery", "Testimonials"];

/**
 * Functional component representing a responsive app bar with drawer navigation.
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.window - Reference to the window object.
 * @returns {JSX.Element} - JSX element representing the drawer app bar.
 */

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * Toggle the mobile drawer.
   */
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
/**
   * Navigate to the home page.
   */
  const navigateToHomePage = () => {
    navigate("/");
  };

  // Theme for the app bar
  const AppBarTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });
  // Drawer content
  const drawer = (
    <ThemeProvider theme={AppBarTheme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Optimal Handyman Services
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={navigateToHomePage}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );

  // Container for the drawer
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={AppBarTheme}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                fontWeight: "bold",
                color: "#267f00",
                display: { xs: "none", sm: "block" },
              }}
              //TO DO Style this link
            >
              Optimal Handyman Services
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#267f00", fontWeight: "bold" }}
                  onClick={navigateToHomePage}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Toolbar />
    </Box>
  );
}

export default DrawerAppBar;
