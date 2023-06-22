export const options = {
  typography: {
    fontFamily: "inherit",
    fontSize: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          height: "48px",
          padding: "0 24px",
          borderRadius: "8px",
          fontWeight: 600,
          textTransform: "none" as const,
          letterSpacing: "-0.8px",
        },
      },
    },
  },
};
