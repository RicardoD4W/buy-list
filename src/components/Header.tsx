import IconConfigPreferences from "../icons/IconConfigPreferences";
import { ThemeProps } from "../types/props";
import CustomTitle from "./CustomTitle";

function Header({ theme }: ThemeProps) {
  return (
    <header
      className="flex items-center justify-around w-full p-4 text-2xl font-semibold transition-colors max-w-[500px]"
      style={{
        color: theme.TitleColor,
        backgroundColor: theme.HeaderColor,
      }}
    >
      <CustomTitle>Lista de la Compra</CustomTitle>
      <button onClick={() => console.log("config pulse")}>
        <IconConfigPreferences />
      </button>
    </header>
  );
}

export default Header;
