import { Product, isFavorite } from "./types";

export const productUtils = {
  isFavorite(product: Product): boolean {
    return !!product[isFavorite];
  },
  toggleFavorite(product: Product): Product {
    return {
      ...product,
      [isFavorite]: !product[isFavorite],
    };
  },
  calculateChange(product: Product): number {
    return (product.openPrice - product.latestPrice) / product.openPrice;
  },
};
