import IconAddProduct from "../icons/IconAddProduct";
import IconBuyList from "../icons/IconBuyList";
import IconCloseSession from "../icons/IconCloseSession";
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
            {roomName || "Lista de la compra"}
          </span>
          <button
            onClick={() => toggleDrawer(false)}
            className="flex items-center justify-center"
          >
            <IconMenuOpen />
          </button>
        </header>

        <main className="flex flex-col items-center justify-between h-[calc(100dvh-48px)] pb-5">
          <nav>
            {roomUUID && (
              <MenuItem to={`/home/${roomUUID}`}>
                <IconBuyList /> <span> Lista de la Compra </span>
              </MenuItem>
            )}

            {roomUUID && (
              <MenuItem to={`/addProduct/${roomUUID}`}>
                <IconAddProduct /> Añadir Producto
              </MenuItem>
            )}

            <MenuItem to={`/rooms/${userId}`}>
              <IconRoom /> Salas
            </MenuItem>

            <MenuItem to={`/config/${userId}`}>
              <IconConfigPreferences /> Configuración
            </MenuItem>
          </nav>

          <nav>
            <MenuItem to={`/logout`}>
              <IconCloseSession className="w-9 h-9" /> Cerrar Sesión
            </MenuItem>
          </nav>
        </main>

        <footer></footer>
      </article>
    </div>
  );
}

export default DrawerNavigationMenu;
