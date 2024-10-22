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
    notifications,
    setNotifications,
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
  const handleChangeNotifications = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifications(e.target.checked);
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
              {Object.entries(paletteColor).map(([nombre, tema]) => (
                <label className="flex items-center justify-center gap-x-1">
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
          <label className="flex items-center justify-center m-2 gap-x-2">
            <h2 className="italic">Notificaciones en tiras</h2>
            <input
              type="checkbox"
              name="notifications"
              onChange={handleChangeNotifications}
              checked={notifications}
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
