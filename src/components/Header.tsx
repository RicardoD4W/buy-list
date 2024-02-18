import { type ThemeProps } from "../types/props";
import CustomTitle from "./CustomTitle";
import DrawerNavigation from "./DrawerNavigation";

function Header({ theme }: ThemeProps) {
  return (
    <header
      className="flex items-center justify-around w-full p-4 text-2xl font-semibold transition-colors sm:justify-center sm:gap-x-5"
      style={{
        color: theme.TitleColor,
        backgroundColor: theme.HeaderColor,
      }}
    >
      <DrawerNavigation />
      <CustomTitle>Lista de la Compra</CustomTitle>
    </header>
  );
}

export default Header;
