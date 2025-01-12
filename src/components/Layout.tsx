import { Outlet } from "react-router";
import { Box, Typography, useTheme } from "@mui/material";

function Layout() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        background: `linear-gradient(to top, ${"#723cc9"}, ${"#fdf7ff"})`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Outlet />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          py: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 Playlistr -{" "}
          <a style={{ color: "inherit" }} href="https://github.com/rjchter">
            rjchter
          </a>{" "}
          🌟 Inspiriert von:{" "}
          <a style={{ color: "inherit" }} href="https://github.com/effem">
            FMK
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout;
