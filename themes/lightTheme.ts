"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { options } from "@/themes/options";

const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3146f6",
    },
    secondary: {
      main: pink[500],
    },
  },
  ...options,
});

export default lightTheme;
