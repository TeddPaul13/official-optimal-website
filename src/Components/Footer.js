/**
 * Renders a footer component with contact information, services offered, and a call-to-action button.
 * @component
 */
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";
import { useNavigate } from "react-router-dom";

// Get the current year for display
const thisYear = new Date();
const yearToDisplay = thisYear.getFullYear();

/**
 * Footer component function.
 * @returns {JSX.Element} Footer component JSX
 */


function Footer() {
  const navigate = useNavigate();

   /**
    * Function to navigate to the "Get Quote" page
    */
  const navigateToGetQuoteForService = () => {
    navigate("/getquote");
  };

  return (
    <Container maxWidth="xxl" disableGutters sx={{ bgcolor: "white" }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contacts
            </Typography>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body">
                <a
                  href="mailto:optimalhandyservices@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  optimalhandyservices@gmail.com
                </a>
              </Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body" className="contact-link">
                0412567362
              </Typography>
            </div>
            <div style={{ marginBottom: 8 }}>
              <Typography variant="body">
                <a
                  href="https://goo.gl/maps/ne6DQFdy1q8MLqDE7"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  Riverstone, NSW
                </a>
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Our Services
            </Typography>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body" className="contact-link">
                Furniture Assembly
              </Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body" className="contact-link">
                Rubbish Removal
              </Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body" className="contact-link">
                Wall Mounting
              </Typography>
            </div>
            <div style={{ marginBottom: 8 }}>
              <Typography variant="body" className="contact-link">
                General Maintenance
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 9,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              Let's get the job done for you.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={navigateToGetQuoteForService}
              sx={{
                marginTop: 2,
                color: "#81dd0b",
                "&:hover": {
                  backgroundColor: "#81dd0b",
                  color: "white",
                },
              }}
            >
              Get a Free Quote Today
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ mt: 2, mb: 2 }}></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          mb: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body2"
            display="inline-flex"
            sx={{ mr: 1, flex: 1 }}
          >
            Copyright
          </Typography>
          <CopyrightIcon sx={{ fontSize: "inherit", mr: 1 }} /> {yearToDisplay}
          <Typography variant="body2" display="inline-flex" sx={{ ml: 1 }}>
            Optimal Handyman Services ABN 94946247183
          </Typography>
        </div>
      </Box>
    </Container>
  );
}

export default Footer;
