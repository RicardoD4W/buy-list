import { useRef } from "react";
import IconSearch from "../icons/IconSearch";
import { useBuyListStore } from "../store/buyListStore";
import { ItemProduct } from "../types/api";
import { type ThemeProps } from "../types/props";

function SearchEngine({ theme, products }: ThemeProps) {
  const setProducts = useBuyListStore((state) => state.setProducts);
  const productsRef = useRef<ItemProduct[]>([...products]);

  const handleInputSearch = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === " ") return;

    const filteredProducts =
      e.currentTarget.value !== ""
        ? productsRef.current.filter((product) => {
            return (
              product.producto
                .toLocaleUpperCase()
                .includes(e.currentTarget.value.toLocaleUpperCase()) ||
              product.supermercado
                .toLocaleUpperCase()
                .includes(e.currentTarget.value.toLocaleUpperCase()) ||
              product.importancia === +e.currentTarget.value
            );
          })
        : productsRef.current;

    setProducts(filteredProducts);
  };

  return (
    <section className="py-6">
      <search className="flex justify-evenly">
        <label
          style={{ color: theme.TitleColor, borderColor: theme.ContentColor }}
          className="flex items-center justify-center px-3 pb-1 border-b-2"
        >
          <IconSearch />
          <input
            onChange={handleInputSearch}
            className="relative ml-1 bg-transparent outline-none active:ring-0 "
            spellCheck
          />
        </label>
      </search>
    </section>
  );
}

export default SearchEngine;
