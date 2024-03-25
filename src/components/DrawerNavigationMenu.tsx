import IconAddProduct from "../icons/IconAddProduct";
import IconBuyList from "../icons/IconBuyList";
import IconConfigPreferences from "../icons/IconConfigPreferences";
import IconMenuOpen from "../icons/IconMenuOpen";
import IconRoom from "../icons/IconRoom";
import { usePreferenceStore } from "../store/preferencesStore";
import { useUserStore } from "../store/userStore";
import { DrawerNavigationMenuProps } from "../types/props";
import MenuItem from "./MenuItem";

function DrawerNavigationMenu({ theme }: DrawerNavigationMenuProps) {
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);
  const { roomName, roomUUID } = useUserStore((state) => state.actualRoom);
  const { id: userId } = useUserStore((state) => state.user);

  return (
    <div className="w-full font-semibold transition-colors">
      <article className="flex flex-col">
        <header
          className="flex items-center justify-between p-4"
          style={{ backgroundColor: theme.HeaderColor }}
        >
          <span className="max-w-[230px] text-xl text-ellipsis overflow-hidden whitespace-nowrap">
            {roomName || ""}
          </span>
          <button
            onClick={() => toggleDrawer(false)}
            className="flex items-center justify-center"
          >
            <IconMenuOpen />
          </button>
        </header>

        <main className="flex flex-col items-center justify-center pt-2">
          <MenuItem to={`/home/${roomUUID}`}>
            <IconBuyList /> Lista de la Compra
          </MenuItem>

          <MenuItem to={`/addProduct/${roomUUID}`}>
            <IconAddProduct /> Añadir Producto
          </MenuItem>

          <MenuItem to={`/rooms/${userId}`}>
            <IconRoom /> Salas
          </MenuItem>

          <MenuItem to={`/config/${userId}`}>
            <IconConfigPreferences /> Configuración
          </MenuItem>
        </main>

        <footer></footer>
      </article>
    </div>
  );
}

export default DrawerNavigationMenu;
