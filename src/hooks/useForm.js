import { getMyOwnId, saveNewOneProduct } from "../services/supabase";

export const useForm = (onClose) => {
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const fields = new FormData(e.target);

    let myId = await getMyOwnId();
    let nombre = fields.get("nombre");
    let cantidad = fields.get("cantidad");
    let supermercado = fields.get("supermercado");
    let descripccion = fields.get("descripccion");

    await saveNewOneProduct(cantidad, nombre, supermercado, descripccion, myId);
    onClose();
  };

  return { handleSubmitForm };
};
