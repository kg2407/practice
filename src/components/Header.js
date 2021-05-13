import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import Avatar from "@material-ui/core/Avatar";
import { Badge, Container, IconButton } from "@material-ui/core";
import AvComponent from "./AvComponent";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: "25px",
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  grow: {
    flexGrow: 1,
  },
  black: {
    backgroundColor: "black",
    border: "3px solid white",
    marginLeft: "2rem",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0.5em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconContainer: {
    alignItems: "right",
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "3rem",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  iconSize: {
    fontSize: "3rem",
    marginLeft: "2rem",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleChange = (e, value) => {
    setValue(value);
  };
  const fetchUrl = () => {
    fetch("https://www.google.com");
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Device Provisioning
            </Typography>
            <div className={classes.grow} />
            <Tooltip title="How to find UDID">
              <IconButton color="inherit" onClick={fetchUrl}>
                <HelpOutlineOutlinedIcon className={classes.iconSize} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Contact Us">
              <IconButton color="inherit">
                <MailOutlineOutlinedIcon className={classes.iconSize} />
              </IconButton>
            </Tooltip>

            <AvComponent />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
