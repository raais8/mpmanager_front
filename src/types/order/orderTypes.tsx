import { Marketplace } from "../marketplace/marketplaceTypes";
import { MarketplaceProduct } from "../product/productTypes";
import { Country, OrderStatus, PayMethod } from "./orderEnums";

export type Customer = {
  id: number;
  bill_phone: string;
  bill_email: string;
  bill_firstname: string;
  bill_lastname: string;
  bill_company: string;
  bill_address: string;
  bill_city: string;
  bill_zipcode: string;
  bill_country: Country;
  ship_phone: string;
  ship_email: string;
  ship_firstname: string;
  ship_lastname: string;
  ship_company: string;
  ship_address: string;
  ship_city: string;
  ship_zipcode: string;
  ship_country: Country;
};

export type Carrier = {
  id: number;
  name: string;
};

export type OrderItem = {
  order_id: number;
  quantity: number;
  purchase_price: number;
  marketplace_product: MarketplaceProduct;
};

export type Order = {
  id: number;
  marketplace: Marketplace;
  customer: Customer;
  order_id: string;
  status: OrderStatus;
  order_date: string;
  total_price: number;
  carrier: Carrier;
  ticket: string;
  ticket_refund: string;
  pay_method: PayMethod;
  package_quantity: number;
  weight: number;
  order_items: OrderItem[];
  notes: string;
  updated_at: string;
};
