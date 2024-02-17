import { type ItemProduct } from "../types/api";

// Recuperamos todos los productos de la sala a la que pertenece el usuario
// TODO implements
export const getAllProductsFromOwnRoom = (
  roomUUID: string,
  userId: number
) => {};

// TODO implements
export const deleteOneProductFromOwnRoom = (
  userId: number,
  productId: number,
  roomUUID: string
) => {
  console.log(
    "User: ",
    userId,
    "productId: ",
    productId,
    "roomUUID: ",
    roomUUID
  );
  console.log("Deleting...");
};

// TODO implements
export const deleteAllProductFromOwnRoom = (
  roomUUID: string,
  userId: number
) => {};

// TODO implements
export const modifyOneProductFromOwnRoom = (
  roomUUID: string,
  userId: number,
  productId: number,
  newProduct: ItemProduct
) => {
  console.log(roomUUID);
  console.log(userId);
  console.log(productId);
  console.log(newProduct);
};
