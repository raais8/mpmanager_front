import { OrderStatus } from "../../types/order/orderEnums";

export const OrderStatusName: Record<OrderStatus, string> = {
  [OrderStatus.PROCESSING]: "Processing",
  [OrderStatus.PENDING]: "Pending",
  [OrderStatus.PREPARING]: "Preparing",
  [OrderStatus.SHIPPING]: "Shipping",
  [OrderStatus.REFUSED]: "Refused",
  [OrderStatus.CANCELLED]: "Cancelled",
  [OrderStatus.REFUNDED]: "Refunded",
};
