import { paletteColor } from "../data/colorsTheme";
import { usePreferenceStore } from "../store/preferencesStore";
import { AvalibeColorsTheme } from "../types/store";

function ThemeConfig() {
  const { colorTheme, setColorTheme } = usePreferenceStore();

  const handleChangeColorThemeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColorTheme(e.currentTarget.value as keyof AvalibeColorsTheme);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="italic">Tema</h2>
      <div className="flex flex-wrap justify-center gap-5 my-3">
        {Object.entries(paletteColor).map(([nombre, tema]) => (
          <label
            key={nombre}
            className="flex items-center justify-center gap-x-1"
          >
            <span
              className="font-semibold"
              style={{ color: tema.BackgroundColor }}
            >
              {nombre}
            </span>
            <input
              defaultChecked={colorTheme === nombre}
              onChange={handleChangeColorThemeChange}
              type="radio"
              value={nombre}
              name="tema"
              className="w-4 h-4"
              style={{ accentColor: tema.BackgroundColor }}
            />
          </label>
        ))}
      </div>
    </section>
  );
}

export default ThemeConfig;
