import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label: {
    marginLeft: "20px",
    padding: "20px 0",
  },
  radioGroup: {
    marginLeft: "20px",
  },
}));

const RadioButton = () => {
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend" className={classes.label}>
        Select one option from the following:
      </FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        className={classes.radioGroup}
      >
        <FormControlLabel
          value="yahoo"
          control={<Radio color="primary" />}
          label="Yahoo"
        />
        <FormControlLabel
          value="aol"
          control={<Radio color="primary" />}
          label="AOL"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
