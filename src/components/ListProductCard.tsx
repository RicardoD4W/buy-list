import { useEffect } from "react";
import { type ListProductCardProps } from "../types/props";
import ProductCard from "./ProductCard";

function ListProductCard({ products }: ListProductCardProps) {
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
