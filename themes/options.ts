export const options = {
    typography: {
        fontFamily: "inherit",
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    height: 48,
                    padding: "0 24px",
                    borderRadius: 48,
                    fontSize: "inherit",
                    fontWeight: 500,
                    textTransform: "none" as const,
                    letterSpacing: 0,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    width: "24px",
                    height: "24px",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: "0",
                    svg: {
                        width: "24px",
                        height: "24px",
                    },
                },
                sizeSmall: {
                    width: "32px",
                    height: "32px",
                },
                sizeMedium: {
                    width: "40px",
                    height: "40px",
                },
                sizeLarge: {
                    width: "48px",
                    height: "48px",
                },
            },
        },
    },
};
