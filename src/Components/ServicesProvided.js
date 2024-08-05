import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import WallMouniting from "../Assets/WallMounting.jpg"
import FurnitureAssembly from "../Assets/flatpackassembly.jpg"
import RubbishRemoval from "../Assets/rubbishremoval1.png"
import GeneralMaintenance from "../Assets/fixingwithdrill.jpg"
import { useNavigate } from "react-router-dom";

export default function ServiceCard() {

  const navigate = useNavigate();
  const navigateToGetQuoteForService = () => {
    navigate('/getquote')
  }
  return (
    <Container component="main" maxWidth="xxl" sx={{ mt: 2 }} >
      <Typography component="h1" variant="h5" sx={{display: 'flex', justifyContent: 'center', mb:2}}>
        Services Provided
      </Typography>
      <Box sx={{  p:2, borderRadius: 2, display: 'flex', justifyContent: 'center' }} >
        <div>
        <Grid container spacing={6} justifyContent={"center"}>
          <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image= {FurnitureAssembly}
                  alt="Furniture Assembly"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Furniture Assembly
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Skip the frustration of DIY assembly for your home or office furniture. We can swiftly assemble your furniture, 
                  ensuring sturdy and precise assembly irrespective of the brand or supplier.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image={RubbishRemoval}
                  alt="Rubbish Removal"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rubbish Removal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Say goodbye to clutter and rubbish hassle-free. 
                  Optimal handyman tackles unwanted items efficiently with safe and sustainable disposal
                  leaving your space clean and organized in no time.
                  </Typography>
                </CardContent>
              </CardActionArea >
            </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image={WallMouniting}
                  alt="Wall Mounting"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Wall Mounting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Elevate your space with expert wall mounting services. 
                  From TVs to shelves to artwork, optimal handyman ensures secure installations, 
                  leaving your walls looking stylish and clutter-free.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={ () => navigateToGetQuoteForService('General Maintenance')}>
                <CardMedia
                  component="img"
                  height="180"
                  image={GeneralMaintenance}
                  alt="General Maintenance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    General Maintenance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Keep your property clean with our extensive general maintenance services. 
                  From minor repairs to routine upkeep, trust us to maintain the functionality and aesthetics of your space.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
          </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
