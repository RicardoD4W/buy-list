import { type ItemProduct } from "../types/api";

// Recuperamos todos los productos de la sala a la que pertenece el usuario
// TODO implements
export const getAllProductsFromRoom = (roomId: number, userId: number) => {};

// TODO implements
export const deleteOneProductFromRoom = (
  roomId: number,
  userId: number,
  productId: number
) => {};

// TODO implements
export const deleteAllProductFromRoom = (
  roomId: number,
  userId: number,
  productId: number
) => {};

// TODO implements
export const ModifyOneProductFromRoom = (
  roomId: number,
  userId: number,
  productId: number,
  newProduct: ItemProduct
) => {};
