import { create } from "zustand";
import { type AvalibeColorsTheme, DrawerPosition } from "../types/store";
import { persist } from "zustand/middleware";

interface PreferenceState {
  colorTheme: keyof AvalibeColorsTheme;
  setColorTheme: (colorTheme: keyof AvalibeColorsTheme) => void;
  drawerDirection: DrawerPosition;
  isDrawerOpen: boolean;
  setDrawerDirection: (drawerDirection: DrawerPosition) => void;
  toggleDrawer: (isDrawerOpen: boolean) => void;
  automaticEmojis: boolean;
  setAutomaticEmojis: (automaticEmojis: boolean) => void;
  notifications: boolean;
  setNotifications: (notifications: boolean) => void;
  scrollBeforeAction?: number;
  setScrollBeforeAction?: (scrollPosition: number) => void;
}

export const usePreferenceStore = create<PreferenceState>()(
  persist(
    (set) => ({
      colorTheme: "Azul",
      setColorTheme: (colorTheme) => set({ colorTheme }),

      drawerDirection: DrawerPosition.LEFT,
      setDrawerDirection: (drawerDirection) => set({ drawerDirection }),

      isDrawerOpen: false,
      toggleDrawer: (isDrawerOpen) => set({ isDrawerOpen }),

      automaticEmojis: true,
      setAutomaticEmojis: (automaticEmojis) => set({ automaticEmojis }),

      notifications: true,
      setNotifications: (notifications) => set({ notifications }),

      scrollBeforeAction: undefined,
      setScrollBeforeAction: (scrollBeforeAction) =>
        set(() => ({ scrollBeforeAction })),
    }),
    { name: "user-config" }
  )
);
