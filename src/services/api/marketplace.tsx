import { Marketplace } from "../../types/marketplace/marketplaceTypes";
import axiosInstance from "./axiosInstance";

export const getMarketplaces = async () => {
  try {
    const response = await axiosInstance.get("marketplaces/api/marketplaces/");
    const marketplaces = response.data.map((item: Marketplace) => ({
      id: item.id,
      name: item.name,
      country: item.country,
      logo_url: item.logo_url,
      color: item.color,
    }));
    return marketplaces;
  } catch (error) {
    throw error;
  }
};
