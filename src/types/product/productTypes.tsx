export type Product = {
  id: number;
  name: string;
  sku: string;
  reference: string;
  price: number;
  stock: number;
  image: string;
  parent: number;
};

export type MarketplaceProduct = {
  id: number;
  product: Product;
  marketplace: number;
};
