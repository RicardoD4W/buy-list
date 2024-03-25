import { type ItemProduct } from "../types/api";

const base_url = import.meta.env.VITE_BASE_URL;

// Recuperamos todos los productos de la sala a la que pertenece el usuario
// TODO implements
export const getAllProductsFromOwnRoom = (
  roomUUID: `${string}-${string}-${string}-${string}-${string}`,
  userId: number
) => {};

// TODO implements
export const deleteOneProductFromOwnRoom = (
  userId: number,
  productId: number,
  roomUUID: `${string}-${string}-${string}-${string}-${string}`
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
  roomUUID: `${string}-${string}-${string}-${string}-${string}`,
  userId: number
) => {};

// TODO implements
export const modifyOneProductFromOwnRoom = (
  roomUUID: `${string}-${string}-${string}-${string}-${string}`,
  userId: number,
  productId: number,
  newProduct: ItemProduct
) => {
  console.log(roomUUID);
  console.log(userId);
  console.log(productId);
  console.log(newProduct);
};

export const register = async (
  username: string,
  email: string,
  pass: string,
  pass_confirm: string
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "name": username,
    "email": email,
    "password": pass,
    "password_confirmation": pass_confirm,
  });

  const request = await fetch(`${base_url}/register/`, {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  });

  const response = await request.json();

  return response;
};

export const login = async (email: string, password: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "email": email,
    "password": password,
  });

  const request = await fetch(`${base_url}/login/`, {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  });

  const response = await request.json();

  return response;
};

export const getAllRoomsFromAnUser = async (Bearer: string, userId: number) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${Bearer}`);

  const request = await fetch(`${base_url}/rooms/${userId}`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });

  const response = await request.json();

  return response;
};
