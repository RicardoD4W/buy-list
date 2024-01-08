import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOptionsStorage = create(
  persist(
    (set, get) => ({
      options: { theme: "green", drawerPosition: "left" },
      setOptions: (value) => {
        set({ options: value });
      },
    }),
    { name: "options" }
  )
);
