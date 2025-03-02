import { Grid2 } from "@mui/material";
import CustomerDetailsBox from "./CustomerDetailsBox";
import DataField from "../../common/DataField";
import { Country, OrderStatus } from "../../../types/order/orderEnums";

interface DetailsSectionProps {
  title: string;
  details: { title: string; value: string | OrderStatus | Country }[];
}

export default function DetailFieldsBox({
  title,
  details,
}: DetailsSectionProps) {
  return (
    <Grid2 size={4}>
      <CustomerDetailsBox title={title}>
        <Grid2 container spacing={1}>
          {details.map((detail, index) => (
            <Grid2 key={index} size={6}>
              <DataField title={detail.title} value={detail.value} />
            </Grid2>
          ))}
        </Grid2>
      </CustomerDetailsBox>
    </Grid2>
  );
}
