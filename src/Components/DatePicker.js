import React, {useState} from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Grid from "@mui/material/Grid";


export default function DatePickerValue({label, onDateChange, name}) {
  const [value, setValue] = useState(dayjs());

  const handleChange = (newValue) =>{
    setValue(newValue)
// calling onchange function and passing it a prop to QuoteForm component.
    if (onDateChange){
      onDateChange(newValue)
    }

  }
  return (
    <Grid item xs={12} >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* TODO Use Theme Style to overide API blue and red color on the border*/}
        <DateTimePicker
          label={label}
          disablePast
          name = {name}
          color="success"
          value={value}
          onChange={handleChange}
        />
    </LocalizationProvider>
    </Grid>
  );
}