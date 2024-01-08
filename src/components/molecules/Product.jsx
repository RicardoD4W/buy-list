/* eslint-disable react/prop-types */
import { useState } from "react";
import { deleteOneProduct } from "../../services/supabase";
import { formaterDaysOfWeeks } from "../../utils/utils";
import IconTrash from "../icons/icon-trash";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useFormEdit } from "../../hooks/useFormEdit";
import CardProduct from "./card-product";
import CardProductEdit from "./card-product-edit";
import IconEdit from "../icons/icon-edit";

const Product = ({
  id,
  nombre,
  created_at,
  supermercado,
  cantidad,
  descripccion,
  usuarios,
  setSearch,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { handleSubmitForm } = useFormEdit({
    setIsEditing,
    id,
    nombre,
    supermercado,
    cantidad,
    descripccion,
  });

  const handleClickCancel = () => {
    setIsEditing(false);
  };

  const handleDeleteProduct = async () => {
    if (isEditing) return;
    await deleteOneProduct(id);
    setSearch("");
  };

  return (
    <Box as="article">
      <Box
        w={"full"}
        p={1}
        minW={"300px"}
        maxW={"300px"}
        bgColor="#FFF"
        border={"1px"}
        borderColor={"gray.200"}
        borderRadius={"lg"}
        shadow={"lg"}
      >
        <Flex as="header" justifyContent={"space-between"}>
          {!isEditing && (
            <Text onClick={() => setIsEditing(true)}>
              <IconEdit />
            </Text>
          )}
          <Text>{usuarios}</Text>
          <Text>{formaterDaysOfWeeks[new Date(created_at).getDay()]}</Text>
          {!isEditing && (
            <Text cursor={"pointer"} onClick={handleDeleteProduct}>
              <IconTrash />
            </Text>
          )}
        </Flex>

        <Divider />

        {isEditing ? (
          <>
            <CardProductEdit
              handleSubmitForm={handleSubmitForm}
              nombre={nombre}
              cantidad={cantidad}
              descripccion={descripccion}
              supermercado={supermercado}
              handleClickCancel={handleClickCancel}
            />
          </>
        ) : (
          <>
            <CardProduct
              nombre={nombre}
              cantidad={cantidad}
              supermercado={supermercado}
              descripccion={descripccion}
              created_at={created_at}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Product;
