import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { usePreferenceStore } from "../store/preferencesStore";
import DrawerNavigationMenu from "./DrawerNavigationMenu";
import IconMenuOpen from "../icons/IconMenuOpen";
import { useTheme } from "../hooks/useTheme";

const DrawerNavigation = () => {
  const drawerDirection = usePreferenceStore((state) => state.drawerDirection);
  const isDrawerOpen = usePreferenceStore((state) => state.isDrawerOpen);
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);
  const { themeState } = useTheme();

  return (
    <>
      <button onClick={() => toggleDrawer(true)}>
        <IconMenuOpen />
      </button>
      <Drawer
        open={isDrawerOpen}
        onClose={() => toggleDrawer(!isDrawerOpen)}
        direction={drawerDirection}
        size={"100%"}
        style={{
          backgroundColor: themeState.BackgroundColor,
        }}
      >
        <DrawerNavigationMenu theme={themeState} />
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
