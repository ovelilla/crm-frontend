"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

import useThemeStore from "@/hooks/useThemeStore";

export default function Home() {
  const { theme, setTheme } = useThemeStore();

  return (
    <Container maxWidth="lg">
      <p>Hola mundo</p>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example using App Router in TypeScript
        </Typography>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          inputProps={{ "aria-label": "theme switch" }}
        />
      </Box>
    </Container>
  );
}
