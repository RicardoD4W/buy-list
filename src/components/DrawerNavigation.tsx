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
  let touchStart = 0;
  let touchEnd = 0;

  return (
    <section>
      <button onClick={() => toggleDrawer(true)}>
        <IconMenuOpen />
      </button>

      <div
        onTouchStart={(e) => (touchStart = e.targetTouches[0].pageX)}
        onTouchEnd={(e) => {
          touchEnd = e.changedTouches[0].pageX;
          if (touchStart - 70 > touchEnd) toggleDrawer(false);
        }}
      >
        <Drawer
          open={isDrawerOpen}
          onClose={() => toggleDrawer(!isDrawerOpen)}
          direction={drawerDirection}
          size={"100%"}
          style={{
            backgroundColor: themeState.BackgroundColor,
          }}
          lockBackgroundScroll
        >
          <DrawerNavigationMenu theme={themeState} />
        </Drawer>
      </div>
    </section>
  );
};

export default DrawerNavigation;
