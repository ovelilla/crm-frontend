"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { pink, indigo } from "@mui/material/colors";
import { options } from "@/themes/options";

const theme = (mode: "light" | "dark"): ThemeOptions => {
    return createTheme({
        palette: {
            mode,
            // primary: {
            //     ...indigo,
            //     main: indigo[500],
            // },
            // secondary: {
            //     ...pink,
            //     main: pink[500],
            // },
        },
        ...options,
    });
};

export default theme;
