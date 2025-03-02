import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

export default function ElementBoxTitle({ title }: Props) {
  return (
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
    </Box>
  );
}
