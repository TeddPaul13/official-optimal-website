import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SelectService from "./SelectService";
import axios from "axios";
import DrawerAppBar from "./AppBarWithDrawer";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ReviewForm() {
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    suburb: "",
    serviceprovided: "",
    review: "",
  });
// TODO Make the page redirect to Home page after form submission.
  // const navigate = useNavigate();

  // const navigateToHomePage = () => {
  //   navigate("/");
  // };

  const reviewCharacterLimit = 100;

  const notify = () =>
    toast.success("Thank you for your Review", { position: "top-center" });

  const changeFormDetails = (event) => {
    const { name, value } = event.target;
    setFormDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Form validation to prevent empty data being sent to server.r
    const { firstname, lastname, suburb, serviceprovided, review } =
      formDetails;
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      suburb.trim() === "" ||
      serviceprovided.trim() === "" ||
      review.trim() === ""
    ) {
      toast.error("Please fill all fields", { position: "top-center" });
      return;
    }
    // Validation to Avoid duplicate names sending data
    if (
      firstname.trim().length < 3 ||
      suburb.trim().length < 5 ||
      review.trim().length < 10
    ) {
      toast.error("Please add more characters", { position: "top-center" });
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/reviews/create`, formDetails)
      .then((response) => {
        console.log(response);
        notify();
        setFormDetails({
          firstname: "",
          lastname: "",
          suburb: "",
          serviceprovided: "",
          review: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DrawerAppBar />
      <Container component="main" maxWidth="sm" sx={{ mt: 2 }}>
        <Typography component="h1" variant="h5">
          Leave a Review
        </Typography>
        <Box sx={{ border: 2, p: 2, borderRadius: 2, borderColor: "green" }}>
          <CssBaseline />
          <div>
            <form validate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstname"
                    variant="outlined"
                    // required
                    fullWidth
                    id="firstname"
                    label="Firstname"
                    autoFocus
                    color="success"
                    onChange={changeFormDetails}
                    value={formDetails.firstname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="lastname"
                    label="Lastname"
                    name="lastname"
                    autoComplete="lname"
                    color="success"
                    onChange={changeFormDetails}
                    value={formDetails.lastname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="suburb"
                    label="Suburb"
                    id="suburb"
                    autoComplete="suburb"
                    color="success"
                    onChange={changeFormDetails}
                    value={formDetails.suburb}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* Prop passed here from SelectService component */}
                  <SelectService
                    onServiceSelectionChange={changeFormDetails}
                    name="serviceprovided"
                    value={formDetails.serviceprovided}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="review"
                    label="Write your Review"
                    id="task"
                    multiline
                    rows={4}
                    autoComplete="task"
                    color="success"
                    onChange={changeFormDetails}
                    value={formDetails.review}
                    inputProps={{
                      maxLength: reviewCharacterLimit,
                    }}
                    helperText={`${formDetails.review.length}/${reviewCharacterLimit}`}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"} mt={2}>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="success"
                >
                  SUBMIT
                </Button>
              </Grid>
            </form>
          </div>
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
}
