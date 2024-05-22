import { compareForEmojis, formatDate, starsCount } from "../helpers/functions";
import { useTheme } from "../hooks/useTheme";
import IconDelete from "../icons/IconDelete";
import IconEdit from "../icons/IconEdit";
import IconEditProduct from "../icons/IconEditProduct";
import IconPlusProduct from "../icons/IconPlusProduct";
import { usePreferenceStore } from "../store/preferencesStore";
import { useUserStore } from "../store/userStore";
import { ContentProductCardProps } from "../types/props";

function ContentProductCard({
  handleClickToggleEditProduct,
  handleClickDeleteProduct,
  product,
}: ContentProductCardProps) {
  const { themeState } = useTheme();
  const { roomUUID } = useUserStore((state) => state.actualRoom);
  const { id: userId } = useUserStore((state) => state.user);
  const automaticEmojis = usePreferenceStore((state) => state.automaticEmojis);

  const {
    uds: cantidad,
    created_at,
    updated_at,
    id: productId,
    importancy: importancia,
    nombre,
    product: producto,
    supermarket: supermercado,
    description: descripccion,
  } = product;

  return (
    <>
      <article
        style={{ backgroundColor: themeState.CardColor }}
        className="block px-3 pt-3 pb-1 rounded-lg w-72 "
      >
        <div>
          <section className="flex justify-between">
            <button onClick={handleClickToggleEditProduct()}>
              <IconEdit color={themeState.PrimaryIconColor} />
            </button>
            <span>{nombre}</span>
            <button
              onClick={handleClickDeleteProduct(productId, userId, roomUUID)}
            >
              <IconDelete color={themeState.SecondaryIconColor} />
            </button>
          </section>
          <hr
            className="w-full mt-1 border-t-[1px] "
            style={{ borderColor: themeState.ContentColor }}
          />
        </div>

        <p className="h-auto mt-3 font-medium text-center break-all ">
          {automaticEmojis ? compareForEmojis(producto) : producto}
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
            <span className="flex items-center justify-center gap-x-1">
              <IconPlusProduct />
              {formatDate(created_at)}
            </span>

            {updated_at && (
              <span className="flex items-center justify-center gap-x-1">
                <IconEditProduct />
                {formatDate(updated_at)}
              </span>
            )}
          </p>
        </section>
      </article>
    </>
  );
}

export default ContentProductCard;
