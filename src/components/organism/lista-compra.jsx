import {
  Box,
  CircularProgress,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { useProduct } from "../../hooks/useProduct";
import { useState } from "react";

import IconSearch from "../icons/icon-search";
import Product from "../molecules/product";
import Header from "../molecules/header";
import { useLogin } from "../../hooks/useProtected";
import { useOptions } from "../../hooks/useOptions";
import { useEffect } from "react";
import { useOptionsStorage } from "../../stores/optionsStorage";

const ListaCompra = () => {
  useLogin();
  const { palett } = useOptions();
  const { options } = useOptionsStorage();

  const { productos, isLoading, productosCopy, setProductos } = useProduct();
  const [search, setSearch] = useState("");

  useEffect(() => {
    let $body = document.querySelector("body");
    $body.style.backgroundColor = palett.background ?? "#6EE7B7";
  }, [options.theme]);

  const handleInputSearch = (e) => {
    if (e.target.value === " ") return;
    setSearch(e.target.value);

    const filteredProducts =
      e.target.value !== ""
        ? productosCopy.current.filter((p) =>
            p.nombre.toUpperCase().includes(e.target.value.toUpperCase())
          )
        : productosCopy.current;

    setProductos(filteredProducts);
  };

  return (
    <Box backgroundColor={palett.background ?? "#6EE7B7"} paddingBottom={5}>
      <Header />
      <Box>
        <Flex
          flexDir="column"
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          marginBottom={5}
        >
          <FormLabel textAlign="center" marginTop={5}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconSearch />
              </InputLeftElement>
              <Input
                type="text"
                color={"white"}
                variant="flushed"
                fontWeight={"medium"}
                value={search}
                onChange={handleInputSearch}
                focusBorderColor={options.theme + ".900"}
              />{" "}
            </InputGroup>
          </FormLabel>

          <Heading as="h3" size="lg" fontWeight="bold" textAlign="center">
            {productos && productos.length
              ? `Hay ${productos.length} productos por comprar`
              : "No hay productos por comprar"}
          </Heading>
          {isLoading ? (
            <Flex justifyContent={"center"} h={"72.5vh"}>
              <CircularProgress isIndeterminate color="green.500" />
            </Flex>
          ) : (
            <Flex gap={5} flexWrap={"wrap"} justifyContent={"center"}>
              {productos.map((p) => (
                <Product
                  key={p.id}
                  id={p.id}
                  nombre={p.nombre}
                  created_at={p.created_at}
                  supermercado={p.supermercado}
                  cantidad={p.cantidad}
                  descripccion={p.descripccion}
                  usuarios={p.usuarios.nombre}
                  setSearch={setSearch}
                />
              ))}
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default ListaCompra;
