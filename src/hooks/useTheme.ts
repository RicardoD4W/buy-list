import { useEffect, useState } from "react";
import { usePreferenceStore } from "../store/preferencesStore";
import { paletteColor } from "../data/colorsTheme";

export const useTheme = () => {
  const { colorTheme } = usePreferenceStore((state) => state);

  const [themeState, setThemeState] = useState(paletteColor[colorTheme]);

  useEffect(() => {
    setThemeState(paletteColor[colorTheme]);
  }, [colorTheme]);

  return { themeState, setThemeState };
};
