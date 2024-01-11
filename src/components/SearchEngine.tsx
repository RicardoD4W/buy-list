import IconSearch from "../icons/IconSearch";
import { type ThemeProps } from "../types/props";

function SearchEngine({ theme }: ThemeProps) {
  return (
    <section className="py-6">
      <search className="flex justify-evenly">
        <label
          style={{ color: theme.TitleColor, borderColor: theme.ContentColor }}
          className="flex items-center justify-center px-3 pb-1 border-b-2"
        >
          <IconSearch />
          <input
            className="relative ml-1 bg-transparent outline-none active:ring-0 "
            spellCheck
          />
        </label>
      </search>
    </section>
  );
}

export default SearchEngine;
