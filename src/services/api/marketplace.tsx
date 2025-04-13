import { Marketplace } from "../../types/marketplace/marketplaceTypes";
import axiosInstance from "./axiosInstance";

export const getMarketplaceList = async () => {
  try {
    const response = await axiosInstance.get("marketplaces/marketplaces/");
    const marketplaces: Marketplace[] = response.data;
    return marketplaces;
  } catch (error) {
    throw error;
  }
};

export const getMarketplace = async (marketplaceId: number) => {
  try {
    const response = await axiosInstance.get(
      `marketplaces/marketplaces/${marketplaceId}`
    );
    const marketplace: Marketplace = response.data;
    return marketplace;
  } catch (error) {
    throw error;
  }
};
