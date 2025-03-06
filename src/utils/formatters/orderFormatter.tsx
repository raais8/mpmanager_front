import { Country, OrderStatus } from "../../types/order/orderEnums";

export const OrderStatusName: Record<OrderStatus, string> = {
  [OrderStatus.PROCESSING]: "Processing",
  [OrderStatus.PENDING]: "Pending",
  [OrderStatus.PREPARING]: "Preparing",
  [OrderStatus.SHIPPING]: "Shipping",
  [OrderStatus.REFUSED]: "Refused",
  [OrderStatus.CANCELLED]: "Cancelled",
  [OrderStatus.REFUNDED]: "Refunded",
};

export const OrderStatusColor: Record<OrderStatus, string> = {
  [OrderStatus.PROCESSING]: "#FFE082",
  [OrderStatus.PENDING]: "#FFCC80",
  [OrderStatus.PREPARING]: "#90CAF9",
  [OrderStatus.SHIPPING]: "#A5D6A7",
  [OrderStatus.REFUSED]: "#EF9A9A",
  [OrderStatus.CANCELLED]: "#E0E0E0",
  [OrderStatus.REFUNDED]: "#CE93D8",
};

export const CountryCodeAbbreviation: Record<Country, string> = {
  [Country.ES]: "es",
  [Country.FR]: "fr",
};

export const CountryCodeName: Record<Country, string> = {
  [Country.ES]: "Spain",
  [Country.FR]: "France",
};

export const CountryCodeColor: Record<Country, string> = {
  [Country.ES]: "#fabd0066",
  [Country.FR]: "#87a5c9",
};
