import { useState, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import {
  importanciaValue,
  ItemProduct,
  supermercadosValue,
} from "../types/api";
import { Oval } from "react-loader-spinner";
import { useUserStore } from "../store/userStore";
import { createOneProductFromOwnRoom } from "../api/api";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { usePreferenceStore } from "../store/preferencesStore";

const toastStyle = {
  pending: { backgroundColor: "#ffff8c", color: "black", fontWeight: "bold" },
  success: { backgroundColor: "#8cff8c", color: "black", fontWeight: "bold" },
  error: { backgroundColor: "#ff8c8c", color: "black", fontWeight: "bold" },
};

function AddProductPage() {
  const { themeState } = useTheme();
  const [isOk, setIsok] = useState({ cantidad: true, producto: true });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id: userId } = useUserStore((state) => state.user);
  const { access_token } = useUserStore((state) => state.user);
  const { roomUUID } = useUserStore((state) => state.actualRoom);
  const notifications = usePreferenceStore((state) => state.notifications);

  const formRef = useRef<HTMLFormElement>(null);

  const handleCleanClick = (e: React.FormEvent) => {
    e.preventDefault();
    formRef.current?.reset();
    setIsok({ cantidad: true, producto: true });
  };

  const handleAddProductOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current as HTMLFormElement;
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

    const productToAdd: Partial<ItemProduct> = {
      uds: cantidad,
      importancy: importancia,
      product: producto,
      supermarket: supermercado,
      user_id: userId,
      description: descripccion,
      created_at: new Date().toISOString(),
    };

    setIsLoading(true);
    notifications
      ? toast
          .promise(
            createOneProductFromOwnRoom(
              access_token,
              roomUUID,
              userId,
              productToAdd
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
                render: "Creando producto...",
                className: "pending-toast",
                style: toastStyle.pending,
              },
              success: {
                render: "Producto creado ✨",
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
          .then(() => formRef.current?.reset())
          .finally(() => setIsLoading(false))
      : createOneProductFromOwnRoom(
          access_token,
          roomUUID,
          userId,
          productToAdd
        )
          .then(() => formRef.current?.reset())
          .finally(() => setIsLoading(false));
  };

  return (
    <>
      <ToastContainer />
      <section
        className="flex items-center justify-center h-[70dvh]"
        style={{
          color: themeState.ContentColor,
        }}
      >
        <article
          style={{ backgroundColor: themeState.CardColor }}
          className="block px-3 pt-3 pb-1 rounded-lg w-72 "
        >
          <form
            ref={formRef}
            onSubmit={handleAddProductOnSubmit}
            className="[&>label]:flex [&>label]:flex-col [&>label]:my-2"
          >
            <label>
              <span>Producto: </span>
              <input
                name="producto"
                type="text"
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
              Descripción:
              <textarea
                name="descripccion"
                className="p-1 text-black rounded-md resize-none"
                style={{
                  backgroundColor: themeState.TitleColor,
                }}
                cols={30}
                rows={3}
              ></textarea>
            </label>

            <label>
              Uds:{" "}
              <input
                name="cantidad"
                type="number"
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
                onClick={handleCleanClick}
                style={{
                  backgroundColor: themeState.SecondaryIconColor,
                }}
                className="p-1 font-semibold text-white rounded-md hover:opacity-35 active:opacity-75"
              >
                Limpiar
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
      </section>
    </>
  );
}

export default AddProductPage;
