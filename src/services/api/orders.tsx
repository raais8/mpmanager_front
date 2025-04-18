import { Order } from "../../types/order/orderTypes";
import axiosInstance from "./axiosInstance";

interface UpdateOrderFields {
  [key: string]: any;
}

export const getOrderList = async (
  page?: number,
  limit?: number,
  search?: string,
  marketplace?: string
) => {
  try {
    const response = await axiosInstance.get("orders/api/order-list", {
      params: { page, limit, search, marketplace },
    });
    const ordersCount = response.data["count"];
    const orders = response.data["results"].map((item: Order) => ({
      id: item.id,
      marketplace: item.marketplace,
      customer: item.customer,
      order_id: item.order_id,
      status: item.status,
      order_date: item.order_date,
      total_price: item.total_price,
      carrier: item.carrier,
      ticket: item.ticket,
      ticket_refund: item.ticket_refund,
      pay_method: item.pay_method,
      package_quantity: item.package_quantity,
      weight: item.weight,
      updated_at: item.updated_at,
    }));
    return { orders, ordersCount };
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (orderId: number) => {
  try {
    const response = await axiosInstance.get(`orders/api/order/${orderId}`);
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
