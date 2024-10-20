import { useState } from "react";
import { type ProductCardProps } from "../types/props";
import ContentProductCard from "./ContentProductCard";
import ContentEditableProductCard from "./ContentEditableProductCard";
import { ToastContainer } from "react-toastify";

const toastStyle = {
  pending: { backgroundColor: "#ffff8c", color: "black", fontWeight: "bold" },
  success: { backgroundColor: "#8cff8c", color: "black", fontWeight: "bold" },
  error: { backgroundColor: "#ff8c8c", color: "black", fontWeight: "bold" },
};

function ProductCard({ product }: ProductCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickToggleEditProduct = () => () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <ToastContainer />
      {isEditing ? (
        <ContentEditableProductCard
          toastStyle={toastStyle}
          product={product}
          exitEditMode={handleClickToggleEditProduct}
        />
      ) : (
        <ContentProductCard
          handleClickToggleEditProduct={handleClickToggleEditProduct}
          product={product}
          toastStyle={toastStyle}
        />
      )}
    </>
  );
}

export default ProductCard;
