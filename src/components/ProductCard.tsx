import { useState } from "react";
import { deleteOneProductFromOwnRoom } from "../api/api";
import { type ProductCardProps } from "../types/props";
import ContentProductCard from "./ContentProductCard";
import ContentEditableProductCard from "./ContentEditableProductCard";
import { useUserStore } from "../store/userStore";
import { Bounce, toast, ToastContainer } from "react-toastify";

const toastStyle = {
  pending: { backgroundColor: "#ffff8c", color: "black", fontWeight: "bold" },
  success: { backgroundColor: "#8cff8c", color: "black", fontWeight: "bold" },
  error: { backgroundColor: "#ff8c8c", color: "black", fontWeight: "bold" },
};

function ProductCard({ product }: ProductCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { access_token } = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(true);
      toast
        .promise(
          deleteOneProductFromOwnRoom(
            access_token,
            userId,
            productId,
            roomUUID
          ),
          {
            pending: {
              render: "Eliminando producto...",
              className: "pending-toast",
              style: toastStyle.pending,
            },
            success: {
              render: "Producto eliminado 🗑️",
              className: "success-toast",
              style: toastStyle.success,
            },
            error: {
              render: "Algo salió mal 😱",
              className: "error-toast",
              style: toastStyle.error,
            },
          },
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
          }
        )
        .finally(() => setIsLoading(false));
    };

  return (
    <>
      <ToastContainer />
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
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default ProductCard;
