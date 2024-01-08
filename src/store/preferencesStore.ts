import { create } from "zustand";
import { AvalibeColorsTheme } from "../types/store";

interface PreferenceState {
  colorTheme: keyof AvalibeColorsTheme;
  setColorTheme: (colorTheme: keyof AvalibeColorsTheme) => void;
}

export const usePreferenceStore = create<PreferenceState>()((set) => ({
  colorTheme: "Negro",
  setColorTheme: (colorTheme) => set({ colorTheme }),
}));
