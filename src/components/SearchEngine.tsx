import IconSearch from "../icons/IconSearch";

function SearchEngine({ color }: { color: string }) {
  return (
    <section className="py-6">
      <search className="flex justify-evenly">
        <IconSearch />
        <input
          className="bg-transparent border-b-2 outline-none active:ring-0"
          style={{ borderColor: color }}
        />
      </search>
    </section>
  );
}

export default SearchEngine;
