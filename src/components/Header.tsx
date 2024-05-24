import { useTheme } from "../hooks/useTheme";
import CustomTitle from "./CustomTitle";
import DrawerNavigation from "./DrawerNavigation";

function Header({ title }: { title: string }) {
  const { themeState } = useTheme();

  return (
    <header
      className="flex items-center justify-around w-full p-4 text-2xl font-semibold transition-colors duration-300 ease-out sm:justify-center sm:gap-x-5"
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
