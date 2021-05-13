import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    width: "400px",
  },
}));

const Udid = () => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      udid: "",
    },
  ]);

  const handleChangeInput = (event, index) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handeleAddFields = () => {
    setInputFields([...inputFields, { udid: "" }]);
  };

  const handleRemoveField = (index) => {
    const values = [...inputFields];
    console.log(values.length);
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Container>
      <form classes={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              className={classes.textField}
              label="Enter UDID"
              name="udid"
              value={inputField.udid}
              variant="outlined"
              onChange={(event) => handleChangeInput(event, index)}
            />
            <IconButton onClick={() => handeleAddFields()}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={() => handleRemoveField(index)}>
              <RemoveIcon />
            </IconButton>
          </div>
        ))}
      </form>
    </Container>
  );
};

export default Udid;
