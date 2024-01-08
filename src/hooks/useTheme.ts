import { useState } from "react";
import { usePreferenceStore } from "../store/preferencesStore";
import { paletteColor } from "../data/colorsTheme";

export const useTheme = () => {
  const theme = usePreferenceStore((state) => state.colorTheme);
  const [themeState, setThemeState] = useState(paletteColor[theme]);

  return { themeState, setThemeState };
};
