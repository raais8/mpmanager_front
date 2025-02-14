import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import NavbarItem from "./NavbarItem";
import { Sell, ShoppingCart, SpaceDashboard } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#1a1a1a",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MPManager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            backgroundColor: "#ebebeb",
            width: 300,
            borderRight: "none",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ marginTop: "10px" }} />
        <NavbarItem itemName="Dashboard" itemIcon={<SpaceDashboard />} to="/" />
        <NavbarItem
          itemName="Orders"
          itemIcon={<ShoppingCart />}
          to="/orders"
        />
        <NavbarItem itemName="Products" itemIcon={<Sell />} to="/products" />
      </Drawer>
    </Box>
  );
}
