import { Avatar, Button, Grid, Icon, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import SettingsCellIcon from "@material-ui/icons/SettingsCell";
import Udid from "./Udid";
import RadioButton from "./RadioButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "75vh",
    width: 600,
    margin: "2rem auto",
    padding: "25px",
    boxShadow: "2px 2px 2px 2px black",
    borderRadius: "10px 10px 10px 10px",
  },
  avs: {
    backgroundColor: "#323232",
  },
  button: {
    marginTop: "2rem",
    marginLeft: "30px",
  },
}));

const Form = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid align="center">
          <Avatar className={classes.avs}>
            <SettingsCellIcon />
          </Avatar>
          <h2>Device Provisioning</h2>
        </Grid>
        <Udid />
        <RadioButton />
        <Grid align="center">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
          >
            Reset
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Form;
