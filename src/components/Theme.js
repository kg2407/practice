import { createMuiTheme } from "@material-ui/core/styles";

const dpBlack = "#1a1a1a";
const dpWhite = "#fff";

export default createMuiTheme({
  palette: {
    common: {
      black: `${dpBlack}`,
      white: `${dpWhite}`,
    },
    primary: {
      main: `${dpBlack}`,
    },
    secondary: {
      main: `${dpWhite}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});
