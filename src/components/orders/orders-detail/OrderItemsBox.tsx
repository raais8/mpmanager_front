import { OrderItem } from "../../../types/order/orderTypes";
import ElementBox from "../../common/ElementBox";
import ItemsTable from "./ItemsTable";

interface Props {
  items: OrderItem[];
}

export default function OrderItemsBox({ items }: Props) {
  return (
    <ElementBox>
      <ItemsTable items={items} />
    </ElementBox>
  );
}
