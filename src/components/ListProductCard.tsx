import { ListProductCardProps } from "../types/props";
import ProductCard from "./ProductCard";

function ListProductCard({ products }: ListProductCardProps) {
  return (
    <>
      {products.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <p>Hay {products.length} productos</p>
      )}
      <p>ListProductCard</p>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}

export default ListProductCard;
