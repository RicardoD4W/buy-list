import { useTheme } from "../hooks/useTheme";
import { usePreferenceStore } from "../store/preferencesStore";
import { DrawerPosition } from "../types/store";
import CustomTitle from "./CustomTitle";
import DrawerNavigation from "./DrawerNavigation";

function Header({ title }: { title: string }) {
  const { themeState } = useTheme();
  const drawerDirection = usePreferenceStore((state) => state.drawerDirection);

  return (
    <header
      className={`flex items-center justify-around w-full p-4 text-2xl font-semibold transition-colors duration-300 ease-out sm:justify-center sm:gap-x-5
        ${
          drawerDirection === DrawerPosition.LEFT
            ? "flex-row"
            : "flex-row-reverse"
        }
        `}
      style={{
        color: themeState.TitleColor,
        backgroundColor: themeState.HeaderColor,
      }}
    >
      <DrawerNavigation />
      <CustomTitle>{title}</CustomTitle>
    </header>
  );
}

export default Header;
