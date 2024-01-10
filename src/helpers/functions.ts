import { emoji } from "../data/emoji";

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
