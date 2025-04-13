import { Customer, Order, OrderItem } from "../../types/order/orderTypes";
import axiosInstance from "./axiosInstance";

interface UpdateOrderFields {
  [key: string]: any;
}

export const getOrderList = async (
  page?: number,
  limit?: number,
  search?: string,
  marketplaceIds?: string
) => {
  try {
    const response = await axiosInstance.get("orders/orders/", {
      params: { page, limit, search, marketplace_ids: marketplaceIds },
    });
    const ordersCount = response.data["count"];
    const orders = response.data["results"].map((item: Order) => ({
      id: item.id,
      order_id: item.order_id,
      status: item.status,
      order_date: item.order_date,
      total_price: item.total_price,
      ticket: item.ticket,
      ticket_refund: item.ticket_refund,
      pay_method: item.pay_method,
      package_quantity: item.package_quantity,
      weight: item.weight,
      notes: item.notes,
      updated_at: item.updated_at,
      marketplace: item.marketplace,
      customer: item.customer,
      carrier: item.carrier,
    }));
    return { orders, ordersCount };
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (orderId: number) => {
  try {
    const response = await axiosInstance.get(`orders/orders/${orderId}`);
    const order: Order = response.data;
    return order;
  } catch (error) {
    throw error;
  }
};

export const updateOrder = async (
  orderId: number,
  upadtedFields: UpdateOrderFields
) => {
  try {
    const response = await axiosInstance.patch(
      `orders/api/order/${orderId}`,
      upadtedFields
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomerList = async (customersIds: number[]) => {
  try {
    const response = await axiosInstance.get("orders/customers/", {
      params: { customer_ids: customersIds.join(",") },
    });
    const customers: Customer[] = response.data;
    return customers;
  } catch (error) {
    throw error;
  }
};

export const getCustomer = async (customerId: number) => {
  try {
    const response = await axiosInstance.get(`orders/customers/${customerId}`);
    const customer: Customer = response.data;
    return customer;
  } catch (error) {
    throw error;
  }
};

export const getOrderItemList = async (orderId: number) => {
  try {
    const response = await axiosInstance.get(`orders/order-items/`, {
      params: { order_id: orderId },
    });
    const orderItems: OrderItem[] = response.data;
    return orderItems;
  } catch (error) {
    throw error;
  }
};
