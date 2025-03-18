import { Add } from "@mui/icons-material";
import BaseButton from "../../common/BaseButton";
import { Link } from "@tanstack/react-router";

export default function OrdersAdd() {
  return (
    <Link to="/orders/create" style={{ display: "flex" }}>
      <BaseButton tooltip="Add Order">
        <Add sx={{ color: "text.secondary" }} />
      </BaseButton>
    </Link>
  );
}
