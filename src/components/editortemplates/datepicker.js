import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    dateofbirth: {
        width: '100% !important',
        marginTop: '16px !important',
        marginBottom: '8px !important'
    },
  }));
export default function BasicDatePicker({text: label}) {
  const [value, setValue] = React.useState(null);
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} className={classes.dateofbirth} />}
      />
    </LocalizationProvider>
  );
}