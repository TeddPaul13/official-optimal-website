/**
 * Renders a card component for displaying testimonials.
 * @component
 */
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import reviews from "./TestmonialData.json"

/**
 * Functional component for rendering a card component for testimonials.
 * @returns {JSX.Element} The rendered component.
 */

export default function CardForTestimonials() {
  /**
   * State variable to store customer reviews.
   * @type {Array}
   */

  const [customerReviews, setCustomerReviews] = useState([]);

  /**
   * State variable to store displayed reviews.
   * @type {Array}
   */

  const [loading, setLoading] = useState(true)
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [error, setError] = useState(null)

  /**
   * Fetches customer reviews from the API and sets the state.
   */


  useEffect(() => {
    try{
      setCustomerReviews(reviews);
        setDisplayedReviews(getRandomReviews(reviews));
        setLoading(false);
    } catch(err) {
        console.error(err)
        setError("Error fetching reviews. Please bare with me!")
        setLoading(false)
      }
  }, []);

  /**
   * Updates the displayed reviews at intervals.
   */

  useEffect(() => {
    if (customerReviews.length > 0){const intervalId = setInterval(() => {
      setDisplayedReviews(getRandomReviews(customerReviews));
    }, 3000);

    return () => clearInterval(intervalId);
  }
  }, [customerReviews]);

/**
   * Returns a random selection of reviews.
   * @param {Array} reviewsArray - Array of reviews.
   * @returns {Array} Randomly selected reviews.
   */
  const getRandomReviews = (reviewsArray) => {
    const reviewsLength = reviewsArray.length;
  // If less that 3 reviews, return all available reviews
    if(reviewsLength < 3){
      return reviewsArray
    }
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * reviewsArray.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices.map((index) => reviewsArray[index]);
    
  };

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent={"center"}>
        {displayedReviews.map((review, index) => (
          <Grid item xs={12} sm={3} md={4} key={index}>
            <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
              <Card sx={{ maxWidth: 345, height: "100%", background: "inherit", boxShadow: "none" }}>
                <CardHeader
                  avatar={
                    // Set the Avatar to be the first letter of customer name
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {review.firstname?.[0]?.toUpperCase()}
                    </Avatar>
                  }
                  title={`${review.firstname} ${review.lastname}`}
                  subheader={review.suburb}
                />
                <CardContent>
                  <Typography variant="subtitle1" color="text.secondary">
                    {review.serviceprovided.replace(/\b\w/g, (char) =>
                      char.toUpperCase()
                    )}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {review.review}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
