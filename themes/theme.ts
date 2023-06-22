"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { pink, indigo } from "@mui/material/colors";
import { options } from "@/themes/options";
import useThemeStore from "@/hooks/useThemeStore";

const { theme: prueba } = useThemeStore();

const theme: ThemeOptions = createTheme({
  palette: {
    mode: prueba,
    primary: {
      ...indigo,
      main: indigo[500],
    },
    secondary: {
      ...pink,
      main: pink[500],
    },
  },
  ...options,
});

export default theme;
