import { type ItemProduct } from "../types/api";

const base_url = import.meta.env.VITE_BASE_URL;

export const getAllProductsFromOwnRoom = async (
  roomUUID: `${string}-${string}-${string}-${string}-${string}`,
  Bearer: string
) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${Bearer}`);
  myHeaders.append("X-Requested-With", "XMLHttpRequest");
  myHeaders.append("Content-Type", "application/json");

  const request = await fetch(`${base_url}/products/${roomUUID}`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });

  if (!request.ok) throw new Error("Error en la petición");

  const response = await request.json();
  return response;
};

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
  myHeaders.append("X-Requested-With", "XMLHttpRequest");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "name": username,
    "email": email,
    "password": pass,
    "password_confirmation": pass_confirm,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const request = await fetch(`${base_url}/register/`, requestOptions);
  const response = await request.json();

  return response;
};

export const login = async (email: string, password: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-Requested-With", "XMLHttpRequest");

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
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-Requested-With", "XMLHttpRequest");

  const request = await fetch(`${base_url}/rooms/${userId}`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });

  const response = await request.json();

  return response;
};
