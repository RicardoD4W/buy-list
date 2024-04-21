import { create } from "zustand";
import { type AvalibeColorsTheme, DrawerPosition } from "../types/store";

interface PreferenceState {
  colorTheme: keyof AvalibeColorsTheme;
  setColorTheme: (colorTheme: keyof AvalibeColorsTheme) => void;
  drawerDirection: DrawerPosition;
  isDrawerOpen: boolean;
  setDrawerDirection: (drawerDirection: DrawerPosition) => void;
  toggleDrawer: (isDrawerOpen: boolean) => void;
  automaticEmojis: boolean;
  setAutomaticEmojis: (automaticEmojis: boolean) => void;
}

export const usePreferenceStore = create<PreferenceState>()((set) => ({
  colorTheme: "Negro", // TODO cambiar
  setColorTheme: (colorTheme) => set({ colorTheme }),

  drawerDirection: DrawerPosition.LEFT,
  setDrawerDirection: (drawerDirection) => set({ drawerDirection }),

  isDrawerOpen: false,
  toggleDrawer: (isDrawerOpen) => set({ isDrawerOpen }),

  automaticEmojis: true,
  setAutomaticEmojis: (automaticEmojis) => set({ automaticEmojis }),
}));
