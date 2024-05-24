import { paletteColor } from "../data/colorsTheme";
import { useTheme } from "../hooks/useTheme";
import { usePreferenceStore } from "../store/preferencesStore";
import { AvalibeColorsTheme, DrawerPosition } from "../types/store";

function ConfigurationPage() {
  const {
    setAutomaticEmojis,
    automaticEmojis,
    setDrawerDirection,
    drawerDirection,
    colorTheme,
    setColorTheme,
  } = usePreferenceStore();
  const { themeState } = useTheme();

  const handleChangeColorThemeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColorTheme(e.currentTarget.value as keyof AvalibeColorsTheme);
  };

  const handleChangeAutoEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutomaticEmojis(e.target.checked);
  };

  const handleChangeSetDrawerPosition = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDrawerDirection(e.currentTarget.value as DrawerPosition);
  };

  return (
    <>
      <article
        className="flex justify-center pt-32 transition-colors duration-300 ease-out "
        style={{
          backgroundColor: themeState.BackgroundColor,
        }}
      >
        <div
          className="flex flex-col items-center justify-around w-11/12 p-4 transition-colors duration-300 ease-out rounded gap-y-6 h-[60%]"
          style={{
            backgroundColor: themeState.CardColor,
            color: themeState.ContentColor,
          }}
        >
          <section className="flex flex-col items-center justify-center">
            <h2 className="italic">Tema</h2>
            <div className="flex flex-wrap justify-center gap-5 my-3">
              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Azul.BackgroundColor }}
                >
                  Azul
                </span>
                <input
                  defaultChecked={colorTheme === "Azul"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Azul"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Azul.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Cyan.BackgroundColor }}
                >
                  Cyan
                </span>
                <input
                  defaultChecked={colorTheme === "Cyan"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Cyan"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Cyan.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Naranja.BackgroundColor }}
                >
                  Naranja
                </span>
                <input
                  onChange={handleChangeColorThemeChange}
                  defaultChecked={colorTheme === "Naranja"}
                  type="radio"
                  value="Naranja"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Naranja.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Rosa.BackgroundColor }}
                >
                  Rosa
                </span>
                <input
                  defaultChecked={colorTheme === "Rosa"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Rosa"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Rosa.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Teal.BackgroundColor }}
                >
                  Teal
                </span>
                <input
                  defaultChecked={colorTheme === "Teal"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Teal"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Teal.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Verde.BackgroundColor }}
                >
                  Verde
                </span>
                <input
                  defaultChecked={colorTheme === "Verde"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Verde"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Verde.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Violeta.BackgroundColor }}
                >
                  Violeta
                </span>
                <input
                  defaultChecked={colorTheme === "Violeta"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Violeta"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Violeta.BackgroundColor }}
                />
              </label>

              <label className="flex items-center justify-center gap-x-1">
                <span
                  className="font-semibold"
                  style={{ color: paletteColor.Negro.BackgroundColor }}
                >
                  Modo oscuro
                </span>
                <input
                  defaultChecked={colorTheme === "Negro"}
                  onChange={handleChangeColorThemeChange}
                  type="radio"
                  value="Negro"
                  name="tema"
                  className="w-4 h-4"
                  style={{ accentColor: paletteColor.Negro.BackgroundColor }}
                />
              </label>
            </div>
          </section>
          <label className="flex items-center justify-center m-2 gap-x-2">
            <h2 className="italic">Emojis automáticos</h2>
            <input
              type="checkbox"
              name="autoemojis"
              onChange={handleChangeAutoEmoji}
              checked={automaticEmojis}
              className="w-5 h-5"
              style={{ accentColor: themeState.HeaderColor }}
            />
          </label>
          <section className="flex flex-col items-center justify-center">
            <h2 className="italic">Posición del menú contextual</h2>
            <div className="flex flex-wrap justify-center gap-5 my-3">
              <label className="flex items-center justify-center gap-x-1">
                <span>Izquierda</span>
                <input
                  defaultChecked={drawerDirection === DrawerPosition.LEFT}
                  onChange={handleChangeSetDrawerPosition}
                  type="radio"
                  value={DrawerPosition.LEFT}
                  name="drawer"
                  className="w-4 h-4"
                  style={{ accentColor: themeState.BackgroundColor }}
                />
              </label>
              <label className="flex items-center justify-center gap-x-1">
                <span>Derecha</span>
                <input
                  defaultChecked={drawerDirection === DrawerPosition.RIGHT}
                  onChange={handleChangeSetDrawerPosition}
                  type="radio"
                  value={DrawerPosition.RIGHT}
                  name="drawer"
                  className="w-4 h-4"
                  style={{ accentColor: themeState.BackgroundColor }}
                />
              </label>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default ConfigurationPage;
