import { createTheme } from "@material-ui/core/styles";

const mainBlack = "#63b8cc";
const mainWhite = "#63b8cc";
const blue = "#757ce8";
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontFamily: "Gotham Rounded",
      fontSize: "1.875rem",
      color: "#fff",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    a: {
      color: mainBlack,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "#aeffad",
        }
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: "none"
      }
    },
    MuiAppBar: {
      colorPrimary: {
        zIndex: "0"
      }
    }
  }
});

export default theme;
