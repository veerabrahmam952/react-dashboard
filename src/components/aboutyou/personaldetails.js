import React from 'react';
import SideSignInImage from '../../images/Main Back - ZIP Code_old.jpg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Textfor from '../editortemplates/textfor';
import { NavLink, useHistory  } from 'react-router-dom';
import BasicDatePicker from '../editortemplates/datepicker';
import CustomizedSteppers from '../editortemplates/breadcrumb';

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '99vh',
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    dateofbirth: {
        width: '100% !important',
        marginTop: '16px !important',
        marginBottom: '8px important'
    },
    progressBar: {
        marginBottom: '8px important'
    }
  }));

    function PersonalDetails() {
        const history = useHistory();
        const classes = useStyles();
        function handleSubmit() {
            let path = '/dashboard';
            history.push(path);
        }
        return(
            <Grid container component="main" className={classes.root}>
                <CustomizedSteppers number={0} className={classes.progressBar} />
                {/* <CssBaseline /> */}
                <Grid item xs={false} sm={4} md={7} className={classes.image} className="makeStyles-image-back" />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Please Enter Your Details
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                name="firstname"
                                autoComplete="firstname"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="lastname"
                                label="Last Name"
                                id="last_name"
                                autoComplete="lastname"
                            />
                            <BasicDatePicker text={'Date of Birth'} className={classes.dateofbirth} />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                            Next
                            </Button>
                        </form>
                    </div>
                </Grid>
                </Grid>
        )
    }

export default PersonalDetails;