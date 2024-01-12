import IconAddProduct from "../icons/IconAddProduct";
import IconConfigPreferences from "../icons/IconConfigPreferences";
import IconMenuClose from "../icons/IconMenuClose";
import IconRoom from "../icons/IconRoom";
import { usePreferenceStore } from "../store/preferencesStore";
import { DrawerNavigationMenuProps } from "../types/props";
import MenuItem from "./MenuItem";

function DrawerNavigationMenu({ theme }: DrawerNavigationMenuProps) {
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);

  return (
    <div className="w-full font-semibold transition-colors">
      <article className="flex flex-col">
        <header
          className="flex items-center justify-end p-4"
          style={{ backgroundColor: theme.HeaderColor }}
        >
          <button onClick={() => toggleDrawer(false)}>
            <IconMenuClose />
          </button>
        </header>

        <main className="flex flex-col items-center justify-center pt-2">
          <MenuItem to="/config">
            <IconAddProduct /> Añadir Producto
          </MenuItem>
          <MenuItem to="/config">
            <IconRoom /> Salas
          </MenuItem>
          <MenuItem to="/config">
            <IconConfigPreferences /> Configuración
          </MenuItem>
        </main>

        <footer></footer>
      </article>
    </div>
  );
}

export default DrawerNavigationMenu;
