import { Outlet } from "react-router";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: `linear-gradient(to top, ${"#723cc9"}, ${"#fdf7ff"})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Outlet />
    </Box>
  );
}

export default Layout;
