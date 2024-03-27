import { create } from "zustand";
import { type ItemProduct } from "../types/api";

interface BuyListState {
  products: ItemProduct[];
  setProducts: (products: ItemProduct[]) => void;
}

export const useBuyListStore = create<BuyListState>()((set) => ({
  products: [],
  setProducts: (products) => set(() => ({ products })),
}));
