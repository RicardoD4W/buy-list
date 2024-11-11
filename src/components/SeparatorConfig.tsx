import { useTheme } from "../hooks/useTheme";

function SeparatorConfig() {
  const { themeState } = useTheme();

  return (
    <hr
      className="w-11/12 border-t border-dashed"
      style={{
        borderColor: themeState.ContentColor,
      }}
    />
  );
}

export default SeparatorConfig;
