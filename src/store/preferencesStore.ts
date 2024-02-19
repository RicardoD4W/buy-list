import { create } from "zustand";
import { type AvalibeColorsTheme, DrawerPosition } from "../types/store";

interface PreferenceState {
  colorTheme: keyof AvalibeColorsTheme;
  setColorTheme: (colorTheme: keyof AvalibeColorsTheme) => void;
  drawerDirection: DrawerPosition;
  isDrawerOpen: boolean;
  toggleDrawer: (isDrawerOpen: boolean) => void;
  automaticEmojis: boolean;
}

export const usePreferenceStore = create<PreferenceState>()((set) => ({
  colorTheme: "Negro", // TODO cambiar
  setColorTheme: (colorTheme) => set({ colorTheme }),

  drawerDirection: DrawerPosition.LEFT,
  isDrawerOpen: false,
  toggleDrawer: (isDrawerOpen) => set({ isDrawerOpen }),

  automaticEmojis: true,
}));
