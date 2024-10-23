import { useTheme } from "../hooks/useTheme";
import { usePreferenceStore } from "../store/preferencesStore";
import { DrawerPosition } from "../types/store";

function DrawerConfig() {
  const { setDrawerDirection, drawerDirection } = usePreferenceStore();
  const { themeState } = useTheme();

  const handleChangeSetDrawerPosition = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDrawerDirection(e.currentTarget.value as DrawerPosition);
  };

  return (
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
  );
}

export default DrawerConfig;
