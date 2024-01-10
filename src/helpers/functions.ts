export const StarsCount = (numberOfStars: number): string => {
  if (numberOfStars > 5 || numberOfStars < 0)
    throw new Error("Las estrellas deben ser como mínimo 0 y como máximo 5");

  const fullyStars = "★".repeat(numberOfStars);
  const nullishStars = 5 - numberOfStars;

  return fullyStars + "☆".repeat(nullishStars);
};
