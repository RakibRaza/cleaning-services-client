import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: "#fff",
      },
    },
    MuiButton: {
      containedSecondary: {
        marginTop: "24px",
        padding: "16px 48px",
        backgroundImage: "linear-gradient(90deg, #f95fb2 0%, #fc796c 100%)",
        "&:hover": {
          backgroundImage: "linear-gradient(90deg,#fc796c 100%, #f95fb2 0%)",
        },
      },
      containedPrimary: {
        backgroundImage: "linear-gradient(90deg, #f95fb2 0%, #fc796c 100%)",
        "&:hover": {
          backgroundImage: "linear-gradient(90deg,#fc796c 100%, #f95fb2 0%)",
        },
      },
    },
  },
  typography: {
    h3: {
      fontWeight: "bold",
      color: "#fff",
    },
    h4: {
      fontWeight: "bold",
      color: "#15287d",
      margin: "24px 0 48px",
    },
    h5: {
      color: "#15287d",
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
      color: "#007cfb",
    },
  },
});
