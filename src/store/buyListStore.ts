import { create } from "zustand";
import { type ItemProduct } from "../types/api";
import { mockDataProducts } from "../data/mockData";

interface BuyListState {
  sala: string;
  products: ItemProduct[];
  setProducts: (products: ItemProduct[]) => void;
}

export const useBuyListStore = create<BuyListState>()((set) => ({
  sala: "",
  products: [...mockDataProducts],
  setProducts: (products) => set(() => ({ products })),
}));
