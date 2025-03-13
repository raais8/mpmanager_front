import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  DateTimePicker,
  LocalizationProvider,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomTextField from "../../common/forms/CustomTextField";
import CustomSelect from "../../common/forms/CustomSelect";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  orderId: string;
  marketplace: string;
}

export default function OrdersAddModal({ open, onClose }: Props) {
  const [formData, setFormData] = useState<FormData>({
    orderId: "",
    marketplace: "",
  });

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
            Add Order
          </Typography>
          <Button
            variant="text"
            disableRipple
            // onClick={() => onSave(value)}
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
            <CustomTextField
              id="order-id"
              name="Order ID"
              value={formData.orderId}
              onChange={(value) => setFormData({ ...formData, orderId: value })}
            />
          </Grid2>
          <Grid2 size={4}>
            <CustomSelect
              id="marketplace"
              name="Marketplace"
              options={["ManoMano", "Amazon"]}
            />
          </Grid2>
          <Grid2 size={4}>
            <FormControl
              variant="filled"
              sx={{
                display: "flex",
              }}
            >
              <InputLabel id="country-select-label">Country</InputLabel>
              <Select
                disableUnderline
                labelId="country-select-label"
                id="country"
                label="Country"
              >
                <MenuItem>Spain</MenuItem>
                <MenuItem>France</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={4}>
            <FormControl
              variant="filled"
              sx={{
                display: "flex",
              }}
            >
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                disableUnderline
                labelId="status-select-label"
                id="status"
                label="Status"
              >
                <MenuItem>Preparation</MenuItem>
                <MenuItem>Shipping</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Order Date"
                slotProps={{
                  textField: {
                    size: "small",
                    variant: "filled",
                    InputProps: {
                      disableUnderline: true,
                      sx: { borderRadius: "0.6rem" },
                    },
                  },
                }}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                }}
                sx={{ display: "flex" }}
              />
            </LocalizationProvider>
          </Grid2>
          <Grid2 size={4}>
            <FormControl
              variant="filled"
              sx={{
                display: "flex",
              }}
            >
              <InputLabel id="carrier-select-label">Carrier</InputLabel>
              <Select
                disableUnderline
                labelId="carrier-select-label"
                id="carrier"
                label="Carrier"
              >
                <MenuItem>Seur</MenuItem>
              </Select>
            </FormControl>
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
            <TextField
              id="bill-firstname-id"
              label="First Name"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-lastname-id"
              label="Last Name"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-email-id"
              label="Email"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-phone-id"
              label="Phone"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-company-id"
              label="Company"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-address-id"
              label="Address"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-city-id"
              label="City"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="bill-zipcode-id"
              label="Zip Code"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <FormControl
              variant="filled"
              sx={{
                display: "flex",
              }}
            >
              <InputLabel id="country-select-label">Country</InputLabel>
              <Select
                disableUnderline
                labelId="country-select-label"
                id="country"
                label="Country"
              >
                <MenuItem>Spain</MenuItem>
                <MenuItem>France</MenuItem>
              </Select>
            </FormControl>
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
            <TextField
              id="ship-firstname-id"
              label="First Name"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-lastname-id"
              label="Last Name"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-email-id"
              label="Email"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-phone-id"
              label="Phone"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-company-id"
              label="Company"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-address-id"
              label="Address"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-city-id"
              label="City"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="ship-zipcode-id"
              label="Zip Code"
              variant="filled"
              sx={{ display: "flex" }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  sx: { borderRadius: "0.6rem" },
                },
              }}
            />
          </Grid2>
          <Grid2 size={4}>
            <FormControl
              variant="filled"
              sx={{
                display: "flex",
              }}
            >
              <InputLabel id="country-select-label">Country</InputLabel>
              <Select
                disableUnderline
                labelId="country-select-label"
                id="country"
                label="Country"
              >
                <MenuItem>Spain</MenuItem>
                <MenuItem>France</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  );
}
