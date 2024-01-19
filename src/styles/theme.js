import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
      "primary": {
        main: "#F5F5F5",
        light: "#F9F9F9",
        dark: "#1A1C1C",
        contrastText: "#767777"
      },
      "secondary": {
        main: "#CCC9C3",
        light: "#E2E2E2",
        dark: "#1C1C18",
        contrastText: "#797772"
      },
      "tertiary": {
        main: "#000000",
        light: "#E2E2E2",
        dark: "#1B1B1B",
        contrastText: "#777777"},
      "error": {
        main: "#DDFF00"},
      "neutral": {
        main: "#D0B28F"}
    }
});

  export default defaultTheme