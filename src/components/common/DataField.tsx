import { Box, Stack, Typography } from "@mui/material";
import BackLabel from "./BackLabel";
import { Country, OrderStatus } from "../../types/order/orderEnums";

interface Props {
  title: string;
  value: string | OrderStatus | Country;
}

export default function DataField({ title, value }: Props) {
  return (
    <Box>
      <Stack direction="row">
        <BackLabel backgroundColor="#f7f7f7">
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </BackLabel>
      </Stack>
      <Typography
        sx={{ marginLeft: "4px", marginTop: "2px", wordBreak: "break-word" }}
      >
        {value}
      </Typography>
    </Box>
  );
}
