import { create } from "zustand";

interface BuyListState {
  sala: string;
}

export const useBuyListStore = create<BuyListState>()((set) => ({
  sala: "",
}));
