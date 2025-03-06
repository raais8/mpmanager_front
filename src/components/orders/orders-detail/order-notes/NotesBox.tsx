import { Box, Button, Typography } from "@mui/material";
import ElementBox from "../../../common/ElementBox";
import { useState } from "react";
import { updateOrder } from "../../../../services/api/orders";
import NotesEditModal from "./NotesEditModal";

interface Props {
  orderId: number;
  orderNotes: string;
}

export default function NotesBox({ orderId, orderNotes }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>(orderNotes);

  const handleSave = (value: string) => {
    updateOrder(orderId, { notes: value });
    setNotes(value);
    setOpen(false);
  };

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
            <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
              {notes}
            </Typography>
          )}
        </Box>
      </ElementBox>
      <NotesEditModal
        open={open}
        notes={notes}
        onClose={() => setOpen(false)}
        onSave={(value) => handleSave(value)}
      />
    </>
  );
}
