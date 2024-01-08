import { updateOneProduct } from "../services/supabase";

export const useFormEdit = ({
  setIsEditing,
  id,
  nombre,
  supermercado,
  cantidad,
  descripccion,
}) => {
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const fields = new FormData(e.target);

    let nombreN = fields.get("nombre");
    let supermercadoN = fields.get("supermercado");
    let cantidadN = fields.get("cantidad");
    let descripccionN = fields.get("descripccion");

    if (
      nombre.toUpperCase() === nombreN.toUpperCase() &&
      supermercado.toUpperCase() === supermercadoN.toUpperCase() &&
      +cantidad === +cantidadN &&
      descripccion &&
      descripccion.toUpperCase() === descripccionN.toUpperCase()
    ) {
      setIsEditing(false);
    } else {
      await updateOneProduct(
        nombreN,
        supermercadoN,
        cantidadN,
        descripccionN,
        id
      );
      setIsEditing(false);
    }
  };

  return { handleSubmitForm };
};
