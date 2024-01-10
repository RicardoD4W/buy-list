import { type ListProductCardProps } from "../types/props";
import ProductCard from "./ProductCard";

function ListProductCard({ products }: ListProductCardProps) {
  return (
    <>
      <p className="p-1 text-2xl font-medium text-center">
        {products.length === 0
          ? "No hay productos"
          : ` Hay ${products.length} productos`}
      </p>

      <section className="flex flex-col gap-3 my-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default ListProductCard;
