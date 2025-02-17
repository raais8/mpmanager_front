import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  itemName: string;
  itemIcon: ReactNode;
  to: string;
}

export default function NavbarItem({ itemName, itemIcon, to }: Props) {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {({ isActive }) => (
        <ListItem sx={{ paddingTop: "3px", paddingBottom: "3px" }}>
          <ListItemButton
            disableRipple
            sx={{
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.6rem",
              transition: "background 0.2s ease, border-radius 0.2s ease",
              background: isActive ? "#fafafa" : "transparent",
              "&:hover": { background: "#fafafa" },
            }}
          >
            <ListItemIcon sx={{ minWidth: "35px" }}>{itemIcon}</ListItemIcon>
            <ListItemText
              primary={itemName}
              slotProps={{
                primary: { fontWeight: "bold" },
              }}
            />
          </ListItemButton>
        </ListItem>
      )}
    </Link>
  );
}
