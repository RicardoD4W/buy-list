import { compareForEmojis, starsCount } from "../helpers/functions";
import { useTheme } from "../hooks/useTheme";
import IconDelete from "../icons/IconDelete";
import IconEdit from "../icons/IconEdit";
import { type ProductCardProps } from "../types/props";

function ProductCard({ product }: ProductCardProps) {
  const { themeState } = useTheme();

  const {
    cantidad,
    fecha,
    hora,
    id,
    importancia,
    nombre,
    producto,
    supermercado,
    descripccion,
    userId,
  } = product;

  const handleClickToggleEditProduct = (id: number, userId: number) => () => {
    console.log("update");
    console.log("id: ", id);
    console.log("userId: ", userId);
  };

  const handleClickDeleteProduct = (id: number, userId: number) => () => {
    console.log("delete");
    console.log("id: ", id);
    console.log("userId: ", userId);
  };

  return (
    <>
      <article
        style={{ backgroundColor: themeState.CardColor }}
        className="block px-3 pt-3 pb-1 rounded-lg w-72 "
      >
        <div>
          <section className="flex justify-between">
            <button onClick={handleClickToggleEditProduct(id, userId)}>
              <IconEdit color={themeState.PrimaryIconColor} />
            </button>
            <span>{nombre}</span>
            <button onClick={handleClickDeleteProduct(id, userId)}>
              <IconDelete color={themeState.SecondaryIconColor} />
            </button>
          </section>
          <hr
            className="w-full mt-1 border-t-[1px] "
            style={{ borderColor: themeState.ContentColor }}
          />
        </div>

        <p className="h-auto mt-3 font-medium text-center break-all ">
          {compareForEmojis(producto)}
        </p>
        {descripccion && (
          <p className="pt-1 pb-4 text-sm font-light leading-[18px] text-center break-all text-balance">
            {descripccion}
          </p>
        )}

        <section className="flex justify-between ">
          <p className="">
            <span className="font-semibold">{cantidad}</span>
            <span>ud.</span>
          </p>
          <p className="">{supermercado}</p>
        </section>

        <section className="flex items-center justify-between pt-1">
          <p>{starsCount(importancia)}</p>
          <p className="flex flex-col items-center text-xs">
            <span>{hora}</span>
            <span>{fecha}</span>
          </p>
        </section>
      </article>
    </>
  );
}

export default ProductCard;
