"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import theme from "@/themes/theme";
import useThemeStore from "@/hooks/useThemeStore";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const themeMode = useThemeStore((state) => state.themeMode);

    return (
        <React.Fragment>
            <CssBaseline />
            <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
                <ThemeProvider theme={theme(themeMode)}>{children}</ThemeProvider>
            </NextAppDirEmotionCacheProvider>
        </React.Fragment>
    );
}
