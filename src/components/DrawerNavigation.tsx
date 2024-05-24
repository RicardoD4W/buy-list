import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { usePreferenceStore } from "../store/preferencesStore";
import DrawerNavigationMenu from "./DrawerNavigationMenu";
import { useTheme } from "../hooks/useTheme";
import IconMenuClose from "../icons/IconMenuClose";
import { DrawerPosition } from "../types/store";

const DrawerNavigation = () => {
  const drawerDirection = usePreferenceStore((state) => state.drawerDirection);
  const isDrawerOpen = usePreferenceStore((state) => state.isDrawerOpen);
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);
  const { themeState } = useTheme();

  let touchStartX = 0;

  const handleOnTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.targetTouches[0].pageX;
  };

  const handleOnTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].pageX;

    const wichDirection: { [key in DrawerPosition]: () => void } = {
      left: () => {
        if (touchStartX - 70 > touchEndX) toggleDrawer(false);
      },
      right: () => {
        if (touchStartX + 70 < touchEndX) toggleDrawer(false);
      },
    };

    wichDirection[drawerDirection]();
  };

  return (
    <section>
      <button
        onClick={() => toggleDrawer(true)}
        className="flex items-center justify-center"
      >
        <IconMenuClose />
      </button>

      <div onTouchStart={handleOnTouchStart} onTouchEnd={handleOnTouchEnd}>
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
