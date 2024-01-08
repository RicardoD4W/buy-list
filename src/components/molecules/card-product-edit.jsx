import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import IconOnSave from "../icons/icon-on-save";
import IconOnCancel from "../icons/icon-on-cancel";
import { useOptionsStorage } from "../../stores/optionsStorage";

const CardProductEdit = ({
  handleSubmitForm,
  nombre,
  cantidad,
  descripccion,
  supermercado,
  handleClickCancel,
}) => {
  const { options } = useOptionsStorage();

  return (
    <>
      <FormControl as={"form"} onSubmit={handleSubmitForm}>
        <Flex
          as={"header"}
          flexDirection={"column"}
          marginTop={5}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
          <FormLabel>
            Nombre:{" "}
            <Input
              type="text"
              focusBorderColor={options.theme + ".200"}
              name="nombre"
              defaultValue={nombre}
            />
          </FormLabel>

          <FormLabel>
            Cantidad:{" "}
            <Input
              focusBorderColor={options.theme + ".200"}
              type="number"
              name="cantidad"
              defaultValue={cantidad}
            />
          </FormLabel>

          {descripccion && (
            <FormLabel>
              Descripción:{" "}
              <Input
                focusBorderColor={options.theme + ".200"}
                type="text"
                name="descripccion"
                defaultValue={descripccion}
              />
            </FormLabel>
          )}

          <FormLabel w={"95%"}>
            Supermercado:
            <Select
              name="supermercado"
              defaultValue={supermercado}
              focusBorderColor={options.theme + ".200"}
            >
              <option value="Cualquiera">Cualquiera</option>
              <option value="Dia">Dia</option>
              <option value="Carrefour">Carrefour</option>
              <option value="Expósito">Expósito</option>
              <option value="Lidl">Lidl</option>
              <option value="Mercadona">Mercadona</option>
              <option value="Jaén Plaza">Jaén Plaza</option>
              <option value="ElCorteIngles">ElCorteIngles</option>
            </Select>
          </FormLabel>
        </Flex>
        <Divider margin={5} />

        <Flex as="footer" justifyContent={"space-between"} m={5}>
          <Box onClick={handleClickCancel}>
            <IconOnCancel />
          </Box>
          <Box as="button" type="submit">
            <IconOnSave />
          </Box>
        </Flex>
      </FormControl>
    </>
  );
};

export default CardProductEdit;
