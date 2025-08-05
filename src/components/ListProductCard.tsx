import { useEffect } from "react";
import { type ListProductCardProps } from "../types/props";
import ProductCard from "./ProductCard";
import { usePreferenceStore } from "../store/preferencesStore";

function ListProductCard({ products }: ListProductCardProps) {
  const scrollBeforeAction = usePreferenceStore(
    (state) => state.scrollBeforeAction
  );

  useEffect(() => {
    if (scrollBeforeAction) {
      window.scrollTo(0, scrollBeforeAction);
    }
  }, [scrollBeforeAction]);

  return (
    <>
      <p className="p-1 text-2xl font-medium text-center">
        {products.length === 0
          ? "No hay productos"
          : ` Hay ${products.length} productos`}
      </p>

      <section className="flex flex-col gap-3 my-3 sm:flex-wrap sm:flex-row sm:gap-3 sm:justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default ListProductCard;
