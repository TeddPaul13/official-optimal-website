/**
 * Renders the business title section with a background image.
 * @component
 */
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import backgroundImage from "../Assets/homeBackgroundImage.jpg";
import { useNavigate } from "react-router-dom";

/**
 * Functional component for rendering the business title section.
 * @returns {JSX.Element} The rendered component.
 */

function BizTitle() {

  /**
   * Hook for navigation.
   * @type {function}
   */
  const navigate = useNavigate();

  /**
   * Function to navigate to the get quote page.
   */
  const navigateToGetQuoteForService = () => {
    navigate("/getquote");
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <Box textAlign="center">
        {" "}
        <Typography variant="h3" align="center" sx={{ color: "#fff" }}>
          Relaible Handyman Services in Western Sydney.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: 2,
            backgroundColor: "#81dd0b",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          onClick={navigateToGetQuoteForService}
        >
          Get a Free Quote
        </Button>
      </Box>
    </Container>
  );
}

export default BizTitle;
