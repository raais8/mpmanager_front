import { Marketplace } from "../../types/marketplace/marketplaceTypes";
import axiosInstance from "./axiosInstance";

export const getMarketplaces = async () => {
  try {
    const response = await axiosInstance.get("marketplaces/api/marketplaces/");
    const marketplaces = response.data.map((item: Marketplace) => ({
      id: item.id,
      name: item.name,
      logo_url: item.logo_url,
    }));
    return marketplaces;
  } catch (error) {
    throw error;
  }
};
