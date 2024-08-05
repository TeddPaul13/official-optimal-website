import React, {useRef} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import DatePickerValue from "./DatePicker";
import SelectService from "./SelectService";
import DrawerAppBar from "./AppBarWithDrawer";


export default function QuoteForm() {

  const notify = () => toast("Quote submitted successfully", {position: "top-center"})

  const formToEmail = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p3cshrh', 'template_lhlvxr9', formToEmail.current, {publicKey: "_n-aAZxq4pK6TAiV7"} )
            .then(() => {console.log('SUCCESS');
            formToEmail.current.reset();
            notify()
          })
            .catch((error) => {
              console.log('FAILED..', error.text)
            })
  }

  return (
    <>
    <DrawerAppBar/>
    <Container component="main" maxWidth="sm" sx={{ mt: 2 }}>
      <Typography component="h1" variant="h5">
      Get a Free Quote
      </Typography>
      <Box sx={{ border: 2, p: 2, borderRadius: 2, borderColor: "green" }}>
        <CssBaseline />
        <div>
          <form validate ref={formToEmail} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="clientName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  color="success"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="senderEmail"
                  autoComplete="email"
                  color="success"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* TODO Add code to Validate phone number if the user chooses to  */}
                <TextField
                  variant="outlined"
                  fullWidth
                  id="phone"
                  label="Phone No.(Optional)"
                  type="number"
                  name="phone"
                  autoComplete="phone"
                  color="success"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="address"
                  label="Home Address (Optional)"
                  id="address"
                  autoComplete="address"
                  color="success"
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="postcode"
                  label="Postcode"
                  id="postcode"
                  autoComplete="postcode"
                  color="success"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerValue  label= "When can it be done?" name="date"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectService name="service"/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="task"
                  label="Task Description"
                  id="task"
                  multiline
                  rows={4}
                  autoComplete="task"
                  color="success"
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
                Request Quote
              </Button>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
    <ToastContainer/>
    </>
  );
}
