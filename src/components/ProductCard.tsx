import { ProductCardProps } from "../types/props";

function ProductCard({ product }: ProductCardProps) {
  const {
    cantidad,
    fecha,
    hora,
    id,
    importancia,
    nombre,
    producto,
    supermercado,
    userId,
  } = product;

  return (
    <>
      <article>
        <p>{cantidad}</p>
        <p>{fecha}</p>
        <p>{hora}</p>
        <p>{id}</p>
        <p>{importancia}</p>
        <p>{nombre}</p>
        <p>{producto}</p>
        <p>{supermercado}</p>
        <p>{userId}</p>
      </article>
    </>
  );
}

export default ProductCard;
