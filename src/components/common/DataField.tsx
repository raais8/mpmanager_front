import { Box, Chip, Stack, Typography } from "@mui/material";
import { Country, OrderStatus } from "../../types/order/orderEnums";

interface Props {
  title: string;
  value: string | OrderStatus | Country;
}

export default function DataField({ title, value }: Props) {
  return (
    <Box>
      <Stack direction="row">
        <Chip
          label={title}
          size="small"
          sx={{ backgroundColor: "#f7f7f7", color: "text.secondary" }}
        />
      </Stack>
      <Typography
        sx={{ marginLeft: "4px", marginTop: "2px", wordBreak: "break-word" }}
      >
        {value}
      </Typography>
    </Box>
  );
}
