import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  notes: string;
  onClose: () => void;
  onSave: (value: string) => void;
}

export default function NotesEditModal({
  open,
  notes,
  onClose,
  onSave,
}: Props) {
  const [value, setValue] = useState<string>(notes);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "background.paper",
          borderRadius: "0.6rem",
          boxShadow: 24,
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, marginBottom: "0.6rem" }}
          >
            Edit
          </Typography>
          <Button
            variant="text"
            disableRipple
            onClick={() => onSave(value)}
            sx={{
              background: "transparent",
              marginBottom: "0.5rem",
              borderRadius: "0.6rem",
              padding: "0",
              "&:hover": { background: "#f7f7f7" },
            }}
          >
            <Typography>Save</Typography>
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <TextField
            id="order-notes"
            label="Order Notes"
            multiline
            rows={4}
            variant="filled"
            sx={{
              flex: "1",
            }}
            slotProps={{
              input: { disableUnderline: true },
            }}
            onChange={(e) => setValue(e.target.value)}
            defaultValue={notes}
          />
        </Box>
      </Box>
    </Modal>
  );
}
