import { emoji } from "../data/emoji";
import React from "react";

export const starsCount = (numberOfStars: number): string => {
  if (numberOfStars > 5 || numberOfStars < 0)
    throw new Error("Las estrellas deben ser como mínimo 0 y como máximo 5");

  const fullyStars = "★".repeat(numberOfStars);
  const nullishStars = 5 - numberOfStars;

  return fullyStars + "☆".repeat(nullishStars);
};

export const compareForEmojis = (nameProduct: string) => {
  const product = nameProduct;
  nameProduct = nameProduct.toLowerCase();
  nameProduct = nameProduct.replace("á", "a");
  nameProduct = nameProduct.replace("é", "e");
  nameProduct = nameProduct.replace("í", "i");
  nameProduct = nameProduct.replace("ó", "o");
  nameProduct = nameProduct.replace("ú", "u");

  const productSplited = nameProduct.split(" ");
  const emojisKey = Object.keys(emoji);

  const emojiPicture = productSplited
    .map((productIteration) => {
      const key = emojisKey.find((value) =>
        productIteration.includes(value)
      ) as keyof typeof emoji;
      return emoji[key];
    })
    .filter((item) => item !== undefined)[0];

  if (emojiPicture) return `${emojiPicture} ${product}`;
  else return product;
};

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
};

export const changeBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};

export const withSeparators = (
  configComponent: JSX.Element[],
  configSeparator: React.ElementType
) => {
  return configComponent.flatMap((component, index) => {
    const componentKey = `component-${index}`;
    const separatorKey = `separator-${index}`;

    return index < configComponent.length - 1
      ? [
          React.cloneElement(component, { key: componentKey }),
          React.createElement(configSeparator, { key: separatorKey }),
        ]
      : [React.cloneElement(component, { key: componentKey })];
  });
};
