import { type ItemProduct } from "../types/api";

// Recuperamos todos los productos de la sala a la que pertenece el usuario
// TODO implements
export const getAllProductsFromOwnRoom = ({ roomId }: { roomId: number }) => {};

// TODO implements
export const deleteOneProductFromOwnRoom = ({
  roomId,
  userId,
  productId,
}: {
  roomId: number;
  userId: number;
  productId: number;
}) => {};

// TODO implements
export const deleteAllProductFromOwnRoom = ({
  roomId,
  userId,
  productId,
}: {
  roomId: number;
  userId: number;
  productId: number;
}) => {};

// TODO implements
export const ModifyOneProductFromOwnRoom = ({
  roomId,
  userId,
  productId,
  newProduct,
}: {
  roomId: number;
  userId: number;
  productId: number;
  newProduct: ItemProduct;
}) => {};
