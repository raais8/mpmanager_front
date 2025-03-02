import { Box, Button, Typography } from "@mui/material";
import ElementBox from "../../common/ElementBox";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function CustomerDetailsBox({ title, children }: Props) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ marginBottom: "0.5rem" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              marginLeft: "0.6rem",
              marginRight: "0.6rem",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Button
          variant="text"
          disableRipple
          sx={{
            background: "transparent",
            marginBottom: "0.5rem",
            borderRadius: "0.6rem",
            padding: "0",
            "&:hover": { background: "#ffffff" },
          }}
        >
          <Typography>Edit</Typography>
        </Button>
      </Box>
      <ElementBox>
        <Box sx={{ padding: "0.6rem " }}>{children}</Box>
      </ElementBox>
    </>
  );
}
