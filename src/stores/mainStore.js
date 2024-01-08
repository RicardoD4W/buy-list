import { create } from "zustand";

export const useMainStore = create((set, get) => ({
  userData: {},
  setUserData: (value) => {
    set({ userData: value });
  },

  login: 0,
  setLogin: () => {
    set({ login: 1 });
  },
}));
