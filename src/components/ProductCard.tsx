import { useState } from "react";
import { deleteOneProductFromOwnRoom } from "../api/api";
import { type ProductCardProps } from "../types/props";
import ContentProductCard from "./ContentProductCard";
import ContentEditableProductCard from "./ContentEditableProductCard";

function ProductCard({ product }: ProductCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickToggleEditProduct = () => () => {
    setIsEditing(!isEditing);
  };

  const handleClickDeleteProduct =
    (
      productId: number,
      userId: number,
      roomUUID: `${string}-${string}-${string}-${string}-${string}`
    ) =>
    () => {
      deleteOneProductFromOwnRoom(userId, productId, roomUUID);
    };

  return (
    <>
      {isEditing ? (
        <ContentEditableProductCard
          product={product}
          exitEditMode={handleClickToggleEditProduct}
        />
      ) : (
        <ContentProductCard
          handleClickToggleEditProduct={handleClickToggleEditProduct}
          product={product}
          handleClickDeleteProduct={handleClickDeleteProduct}
        />
      )}
    </>
  );
}

export default ProductCard;
