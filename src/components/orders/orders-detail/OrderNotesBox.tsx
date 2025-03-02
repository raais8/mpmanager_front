import { Box, Button, Modal, Typography } from "@mui/material";
import ElementBox from "../../common/ElementBox";
import { useState } from "react";
import DetailEditorModal from "./DetailEditorModal";

interface Props {
  notes: string;
}

export default function OrderNotesBox({ notes }: Props) {
  const [open, setOpen] = useState(false);

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
            Order Notes
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
          onClick={() => setOpen(true)}
        >
          <Typography>Edit</Typography>
        </Button>
      </Box>
      <ElementBox>
        <Box sx={{ padding: "0.6rem" }}>
          {notes === "" ? (
            <Typography variant="body2" color="text.secondary">
              No notes added.
            </Typography>
          ) : (
            <Typography variant="body1">Test</Typography>
          )}
        </Box>
      </ElementBox>
    </>
  );
}
