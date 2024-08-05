/**
 * Renders the component displaying areas of service.
 * @component
 */
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AreaMap from "./AreaMap";
import ListOfSuburbs from "./ListOfSurburbs";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Functional component for displaying areas of service.
 * @returns {JSX.Element} The rendered component.
 */

export default function AreasOfService() {

  /**
   * Theme object from MUI.
   */
  const theme = useTheme();

   /**
   * Boolean indicating if the screen size is large. The map is only displayed on large screens.
   * @type {boolean}
   */

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            {" "}
            Areas We Service
          </Typography>
        </Box>
      </div>
      <Container
        maxWidth="xxl"
        sx={{
          bgcolor: "#E1F0DA",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        ></Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ListOfSuburbs />
            </Box>
          </Grid>
          {isLargeScreen && (
            <Grid item xs={12} md={6} className="noshow">
              <Box sx={{ width: "100%", height: 450, mb: 2, mt: 2 }}>
                <AreaMap />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
