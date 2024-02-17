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

function ContentEditableProductCard({
  product,
  exitEditMode,
}: ContenEditabletProductCardProps) {
  const [isOk, setIsok] = useState({ cantidad: true, producto: true });

  const { themeState } = useTheme();
  const { roomUUID } = useUserStore((state) => state.room);
  const { userId } = useUserStore((state) => state.user);

  const {
    cantidad,
    importancia,
    nombre,
    id,
    supermercado,
    producto,
    descripccion,
    fecha,
    hora,
  } = product;

  const handleChangeProductOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      cantidad,
      fecha,
      hora,
      id,
      importancia,
      nombre,
      producto,
      supermercado,
      userId,
      descripccion,
    };

    modifyOneProductFromOwnRoom(roomUUID, userId, id, productUpdated);
  };

  return (
    <>
      <article
        style={{ backgroundColor: themeState.CardColor }}
        className="block px-3 pt-3 pb-1 rounded-lg w-72 "
      >
        <div>
          <section className="flex justify-between">
            <span>{hora}</span>
            <span>{nombre}</span>
            <span>{fecha}</span>
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
            <button
              onClick={exitEditMode()}
              style={{
                backgroundColor: themeState.SecondaryIconColor,
              }}
              className="p-1 font-semibold text-white rounded-md hover:opacity-35 active:opacity-75"
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: themeState.PrimaryIconColor,
              }}
              className="p-1 font-semibold text-white rounded-md hover:opacity-35 active:opacity-75"
            >
              Guardar
            </button>
          </div>
        </form>
      </article>
    </>
  );
}

export default ContentEditableProductCard;
