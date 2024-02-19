import { create } from "zustand";
import { type ItemProduct } from "../types/api";
import { mockDataProducts } from "../data/mockData";

interface BuyListState {
  products: ItemProduct[];
  setProducts: (products: ItemProduct[]) => void;
}

export const useBuyListStore = create<BuyListState>()((set) => ({
  products: [...mockDataProducts], // TODO eliminar
  setProducts: (products) => set(() => ({ products })),
}));
