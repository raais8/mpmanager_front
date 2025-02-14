import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import "@fontsource/lato";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f1f1f1",
        },
      },
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: "300px",
            marginTop: "64px",
          }}
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  ),
});
