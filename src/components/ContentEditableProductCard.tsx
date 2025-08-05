import { useState } from "react";
import { modifyOneProductFromOwnRoom } from "../api/api";
import { useTheme } from "../hooks/useTheme";
import { useUserStore } from "../store/userStore";
import {
  ItemProduct,
  importanciaValue,
  supermercadosValue,
} from "../types/api";
import { ContenEditabletProductCardProps } from "../types/props";
import { formatDate } from "../helpers/functions";
import IconPlusProduct from "../icons/IconPlusProduct";
import { Oval } from "react-loader-spinner";
import { Bounce, toast } from "react-toastify";
import { usePreferenceStore } from "../store/preferencesStore";

function ContentEditableProductCard({
  product,
  exitEditMode,
  toastStyle,
}: ContenEditabletProductCardProps) {
  const [isOk, setIsok] = useState({ cantidad: true, producto: true });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { themeState } = useTheme();

  const { roomUUID } = useUserStore((state) => state.actualRoom);
  const { access_token } = useUserStore((state) => state.user);
  const { id: userId } = useUserStore((state) => state.user);

  const notifications = usePreferenceStore((state) => state.notifications);
  const setScrollBeforeAction = usePreferenceStore(
    (state) => state.setScrollBeforeAction
  );

  const {
    uds: cantidad,
    importancy: importancia,
    user_name: name,
    id,
    supermarket: supermercado,
    product: producto,
    description: descripccion,
    created_at,
  } = product;

  const handleChangeProductOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!roomUUID) return;

    setScrollBeforeAction(window.scrollY);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const producto = formData.get("producto") + "";
    const descripccion = formData.get("descripccion") + "";
    const cantidad = +formData.get("cantidad")!;
    const supermercado = formData.get("supermercado") + "";
    const importancia = +formData.get("importancia")!;

    if (producto === "")
      return setIsok({ cantidad: isOk.cantidad, producto: false });
    if (cantidad <= 0)
      return setIsok({ producto: isOk.cantidad, cantidad: false });

    setIsok({ producto: true, cantidad: true });

    const productUpdated: ItemProduct = {
      uds: cantidad,
      id,
      importancy: importancia,
      user_name: name,
      product: producto,
      supermarket: supermercado,
      user_id: userId,
      description: descripccion,
      created_at,
      updated_at: new Date().toISOString(),
    };

    exitEditMode()();

    setIsLoading(true);
    notifications
      ? toast
          .promise(
            modifyOneProductFromOwnRoom(
              access_token,
              roomUUID,
              userId,
              productUpdated
            ).then((res) => {
              const { errors } = res;
              if (errors) {
                throw new Error(
                  Object.values(errors).join().replaceAll(",", "\n")
                );
              }
            }),
            {
              pending: {
                render: "Editando producto...",
                className: "pending-toast",
                style: toastStyle.pending,
              },
              success: {
                render: "Producto editado 📝",
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
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
              transition: Bounce,
            }
          )
          .finally(() => setIsLoading(false))
      : modifyOneProductFromOwnRoom(
          access_token,
          roomUUID,
          userId,
          productUpdated
        ).finally(() => setIsLoading(false));
  };

  return (
    <>
      <article
        style={{ backgroundColor: themeState.CardColor }}
        className="block px-3 pt-3 pb-1 rounded-lg w-72 "
      >
        <div>
          <section className="flex justify-between">
            <span>{name}</span>
            <span className="flex items-center justify-center text-xs">
              {" "}
              <IconPlusProduct />
              {formatDate(created_at)}
            </span>
          </section>
          <hr
            className="w-full mt-1 border-t-[1px] "
            style={{ borderColor: themeState.ContentColor }}
          />
        </div>

        <form
          onSubmit={handleChangeProductOnSubmit}
          className="[&>label]:flex [&>label]:flex-col [&>label]:my-2"
        >
          <label>
            <span>Producto: </span>
            <input
              name="producto"
              type="text"
              defaultValue={producto}
              className={
                isOk.producto
                  ? "p-1 text-black rounded-md"
                  : "p-1 text-black rounded-md  ring-2 ring-red-500"
              }
              style={{
                backgroundColor: themeState.TitleColor,
              }}
            />
            {!isOk.producto && (
              <small className="bottom-0 left-0 my-1 text-red-500">
                Este campo es requerido
              </small>
            )}
          </label>

          <label>
            Descripcción:
            <textarea
              name="descripccion"
              className="p-1 text-black rounded-md resize-none"
              style={{
                backgroundColor: themeState.TitleColor,
              }}
              cols={30}
              rows={3}
              defaultValue={descripccion}
            ></textarea>
          </label>

          <label>
            Uds:{" "}
            <input
              name="cantidad"
              type="number"
              defaultValue={cantidad}
              className={
                isOk.cantidad
                  ? "p-1 text-black rounded-md"
                  : "p-1 text-black rounded-md  ring-2 ring-red-500"
              }
              style={{
                backgroundColor: themeState.TitleColor,
              }}
            />
            {!isOk.cantidad && (
              <small className="bottom-0 left-0 my-1 text-red-500">
                Este campo es requerido y mayor a 0
              </small>
            )}
          </label>

          <label>
            Supermercado:{" "}
            <select
              name="supermercado"
              className="p-1 text-black rounded-md resize-none"
              defaultValue={supermercado}
              style={{
                backgroundColor: themeState.TitleColor,
              }}
            >
              {supermercadosValue.map((establecimiento) => (
                <option key={establecimiento} value={establecimiento}>
                  {establecimiento}
                </option>
              ))}
            </select>
          </label>

          <label>
            Importancia:{" "}
            <select
              name="importancia"
              defaultValue={importancia}
              className="p-1 text-black rounded-md"
              style={{
                backgroundColor: themeState.TitleColor,
              }}
            >
              {importanciaValue.map((lvl, index) => (
                <option key={lvl} value={index}>
                  {lvl}
                </option>
              ))}
            </select>
          </label>

          <div className="flex justify-between mt-5 mb-1">
            <span
              onClick={exitEditMode()}
              style={{
                backgroundColor: themeState.SecondaryIconColor,
              }}
              className="p-1 font-semibold text-white rounded-md hover:opacity-35 active:opacity-75"
            >
              Cancelar
            </span>
            {isLoading ? (
              <div
                style={{
                  backgroundColor: themeState.PrimaryIconColor,
                }}
                className="flex items-center justify-center w-20 font-semibold text-white rounded-md hover:opacity-35 active:opacity-75"
              >
                <Oval
                  visible={true}
                  height="auto"
                  width="24"
                  color="white"
                  secondaryColor={themeState.SecondaryIconColor}
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <button
                type="submit"
                style={{
                  backgroundColor: themeState.PrimaryIconColor,
                }}
                className="w-20 p-1 font-semibold text-white rounded-md hover:opacity-35 active:opacity-75"
              >
                Guardar
              </button>
            )}
          </div>
        </form>
      </article>
    </>
  );
}

export default ContentEditableProductCard;
