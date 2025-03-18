import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid2 } from "@mui/material";
import { z } from "zod";
import CustomTextField from "./CustomTextField";
import ElementBox from "../../common/ElementBox";
import ElementBoxTitle from "../../common/ElementBoxTitle";
import { marketplaceSchema } from "../../../types/marketplace/marketplaceSchemas";
import CustomSelect from "./CustomSelect";
import { getMarketplaces } from "../../../services/api/marketplace";
import { Marketplace } from "../../../types/marketplace/marketplaceTypes";
import { useQuery } from "@tanstack/react-query";
import { orderSchema } from "../../../types/order/orderSchemas";
import { OrderStatus } from "../../../types/order/orderEnums";
import { OrderStatusName } from "../../../utils/formatters/orderFormatter";

const orderFormSchema = orderSchema.extend({
  marketplace: marketplaceSchema.pick({ id: true }),
});

type FormData = z.infer<typeof orderFormSchema>;

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(orderFormSchema),
  });

  const {
    data: marketplaces = [],
    isPending,
    isError,
  } = useQuery<Marketplace[]>({
    queryKey: ["marketplaces"],
    queryFn: getMarketplaces,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <ElementBoxTitle title="General" />
          <ElementBox>
            <Grid2 container spacing={2} sx={{ padding: "0.6rem" }}>
              <Grid2 size={6}>
                <CustomTextField
                  label="Order ID"
                  name="order_id"
                  error={errors.order_id?.message}
                  register={register}
                />
              </Grid2>
              <Grid2 size={6}>
                <CustomSelect
                  label="Marketplace"
                  name="marketplace.id"
                  options={marketplaces.map((marketplace) => ({
                    key: marketplace.id,
                    value: marketplace.name,
                  }))}
                  error={errors.marketplace?.id?.message}
                  register={register}
                />
              </Grid2>
              <Grid2 size={6}>
                <CustomSelect
                  label="Status"
                  name="status.id"
                  options={Object.values(OrderStatus)
                    .filter((id) => typeof id === "number")
                    .map((id) => ({
                      key: id,
                      value: OrderStatusName[id],
                    }))}
                  error={errors.status?.message}
                  register={register}
                />
              </Grid2>
            </Grid2>
          </ElementBox>
        </Grid2>
        <Grid2 size={6}>
          <ElementBoxTitle title="Customer" />
          <ElementBox>Bill</ElementBox>
        </Grid2>
        <Grid2 size={12}>
          <ElementBoxTitle title="Items" />
          <ElementBox>Items</ElementBox>
        </Grid2>
      </Grid2>
      <Button type="submit">Submit</Button>
      {errors.root?.message && <p>{errors.root.message}</p>}
    </form>
  );
}
