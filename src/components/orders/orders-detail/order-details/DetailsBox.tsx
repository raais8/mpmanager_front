import { Box, Grid2, Typography } from "@mui/material";
import DataField from "../../../common/DataField";
import { Country, OrderStatus } from "../../../../types/order/orderEnums";
import ElementBox from "../../../common/ElementBox";

interface DetailsSectionProps {
  title: string;
  details: { title: string; value: string | OrderStatus | Country }[];
}

export default function DetailsFieldsBox({
  title,
  details,
}: DetailsSectionProps) {
  return (
    <Grid2 size={4}>
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
      <ElementBox>
        <Box sx={{ padding: "0.6rem " }}>
          <Grid2 container spacing={1}>
            {details.map((detail, index) => (
              <Grid2 key={index} size={6}>
                <DataField title={detail.title} value={detail.value} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </ElementBox>
    </Grid2>
  );
}
