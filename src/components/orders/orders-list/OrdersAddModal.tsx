import { Box, Button, Grid2, Modal, Typography } from "@mui/material";
import CustomTextField from "../../common/forms/CustomTextField";
import CustomSelect from "../../common/forms/CustomSelect";
import CustomDateTimePicker from "../../common/forms/CustomDateTimePicker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import dayjs from "dayjs";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  orderId: string;
  marketplace: string;
  country: string;
  status: string;
  orderDate: string;
  carrier: string;
  billFirstname: string;
  billLastname: string;
  billEmail: string;
  billPhone: string;
  billCompany: string;
  billAddress: string;
  billCity: string;
  billZipcode: string;
  billCountry: string;
  shipFirstname: string;
  shipLastname: string;
  shipEmail: string;
  shipPhone: string;
  shipCompany: string;
  shipAddress: string;
  shipCity: string;
  shipZipcode: string;
  shipCountry: string;
}

export default function OrdersAddModal({ open, onClose }: Props) {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              Add Order
            </Typography>
            <Button
              variant="text"
              type="submit"
              disableRipple
              sx={{
                background: "transparent",
                marginBottom: "0.5rem",
                borderRadius: "0.6rem",
                padding: "0",
                "&:hover": { background: "#f7f7f7" },
              }}
            >
              <Typography>Add</Typography>
            </Button>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: 800, marginBottom: "0.6rem" }}
          >
            General
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Controller
                name="orderId"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomTextField {...field} label="Order ID" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="marketplace"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    label="Marketplace"
                    options={["ManoMano", "Amazon"]}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    label="Country"
                    options={["Spain", "France"]}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="status"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    label="Status"
                    options={["Ready", "Shipped"]}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="orderDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomDateTimePicker
                    {...field}
                    value={field.value ? dayjs(field.value) : null}
                    name="Order Date"
                    label="Order Date"
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="carrier"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomSelect {...field} label="Carrier" options={["Seur"]} />
                )}
              />
            </Grid2>
          </Grid2>
          <Typography
            variant="body1"
            sx={{ fontWeight: 800, marginBottom: "0.6rem", marginTop: "1rem" }}
          >
            Billing
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Controller
                name="billFirstname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="First Name" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billLastname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Last Name" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billEmail"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Email" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billPhone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Phone" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billCompany"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Company" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billAddress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Address" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billCity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="City" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billZipcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Zip Code" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="billCountry"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    label="Country"
                    options={["Spain", "France"]}
                  />
                )}
              />
            </Grid2>
          </Grid2>
          <Typography
            variant="body1"
            sx={{ fontWeight: 800, marginBottom: "0.6rem", marginTop: "1rem" }}
          >
            Shipping
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Controller
                name="shipFirstname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="First Name" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipLastname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Last Name" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipEmail"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Email" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipPhone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Phone" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipCompany"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Company" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipAddress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Address" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipCity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="City" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipZipcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomTextField {...field} label="Zip Code" />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="shipCountry"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    label="Country"
                    options={["Spain", "France"]}
                  />
                )}
              />
            </Grid2>
          </Grid2>
        </Box>
      </form>
    </Modal>
  );
}
