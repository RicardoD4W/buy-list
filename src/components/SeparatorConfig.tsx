import { useTheme } from "../hooks/useTheme";

function SeparatorConfig() {
  const { themeState } = useTheme();

  return (
    <hr
      className="w-11/12 opacity-45"
      style={{ borderColor: themeState.ContentColor }}
    />
  );
}

export default SeparatorConfig;
