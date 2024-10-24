import { Oval } from "react-loader-spinner";
import { compareForEmojis, formatDate, starsCount } from "../helpers/functions";
import { useTheme } from "../hooks/useTheme";
import IconDelete from "../icons/IconDelete";
import IconEdit from "../icons/IconEdit";
import IconEditProduct from "../icons/IconEditProduct";
import IconPlusProduct from "../icons/IconPlusProduct";
import { usePreferenceStore } from "../store/preferencesStore";
import { useUserStore } from "../store/userStore";
import { ContentProductCardProps } from "../types/props";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { deleteOneProductFromOwnRoom } from "../api/api";

function ContentProductCard({
  handleClickToggleEditProduct,
  product,
  toastStyle,
}: ContentProductCardProps) {
  const { themeState } = useTheme();
  const { roomUUID } = useUserStore((state) => state.actualRoom);
  const automaticEmojis = usePreferenceStore((state) => state.automaticEmojis);
  const notifications = usePreferenceStore((state) => state.notifications);

  const { access_token } = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    uds: cantidad,
    created_at,
    updated_at,
    id: productId,
    importancy: importancia,
    user_name: name,
    product: producto,
    supermarket: supermercado,
    description: descripccion,
  } = product;

  const handleClickDeleteProduct = (productId: number) => {
    setIsLoading(true);

    notifications
      ? toast
          .promise(
            deleteOneProductFromOwnRoom(access_token, productId).then((res) => {
              const { error } = res;

              if (error) {
                throw new Error(error);
              }
            }),
            {
              pending: {
                render: "Eliminando producto...",
                className: "pending-toast",
                style: toastStyle.pending,
              },
              success: {
                render: "Producto eliminado 🗑️",
                className: "success-toast",
                style: toastStyle.success,
              },
              error: {
                render: ({ data }: { data }) => {
                  const errorMessage = data?.message || "Algo salió mal 😱";
                  return `Error: ${errorMessage}`;
                },
                className: "error-toast",
                style: toastStyle.error,
              },
            },
            {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
              transition: Bounce,
            }
          )
          .finally(() => setIsLoading(false))
      : deleteOneProductFromOwnRoom(access_token, productId).finally(() =>
          setIsLoading(false)
        );
  };

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
            <span>{name}</span>
            {isLoading ? (
              <Oval
                visible={true}
                height="auto"
                width="24"
                color={themeState.SecondaryIconColor}
                secondaryColor={themeState.CardColor}
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <button
                onClick={() => {
                  if (!roomUUID) return;
                  handleClickDeleteProduct(productId);
                }}
              >
                <IconDelete color={themeState.SecondaryIconColor} />
              </button>
            )}
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
