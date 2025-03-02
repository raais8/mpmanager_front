import { Box, Modal } from "@mui/material";

interface Props {
  open: boolean;
}

export default function DetailEditorModal({ open }: Props) {
  return (
    <Modal open={open}>
      <Box>Test</Box>
    </Modal>
  );
}
