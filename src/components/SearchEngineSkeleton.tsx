import IconSearch from "../icons/IconSearch";
import { ThemeProps } from "../types/props";

function SearchEngineSkeleton({ theme }: ThemeProps) {
  return (
    <section className="py-6">
      <search className="flex justify-evenly">
        <label
          style={{ color: theme.TitleColor, borderColor: theme.ContentColor }}
          className="flex items-center justify-center px-3 pb-2 border-b-2"
        >
          <IconSearch />
          <input
            name="search"
            readOnly
            className="relative ml-1 bg-transparent outline-none active:ring-0 "
            spellCheck
          />
        </label>
      </search>
    </section>
  );
}

export default SearchEngineSkeleton;
