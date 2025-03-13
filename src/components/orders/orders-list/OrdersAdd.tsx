import { Add } from "@mui/icons-material";
import BaseButton from "../../common/BaseButton";
import { useState } from "react";
import OrderAddModal from "./OrdersAddModal";

export default function OrdersAdd() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <BaseButton tooltip="Add Order" onClick={() => setOpen(true)}>
        <Add sx={{ color: "text.secondary" }} />
      </BaseButton>
      <OrderAddModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
