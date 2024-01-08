import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useCardDates } from "../../hooks/useCardDates";

const CardProduct = ({
  nombre,
  cantidad,
  supermercado,
  descripccion,
  created_at,
}) => {
  const { fecha, hora } = useCardDates({ created_at });

  return (
    <>
      <Flex as={"main"} justifyContent={"center"} marginTop={1} gap={5}>
        <Text fontWeight={"semibold"}>{nombre}</Text>
        <Box>
          <Text>{cantidad}ud.</Text>
        </Box>
        <Text fontWeight={"semibold"}>{supermercado}</Text>
      </Flex>

      <Flex as={"footer"} justifyContent={"space-between"} marginTop={5}>
        {descripccion ? (
          <>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text w={"50%"} overflowWrap={"break-word"} fontSize={"sm"}>
                {descripccion}
              </Text>

              <Divider
                orientation="vertical"
                h={"60%"}
                borderRadius={"full"}
                borderColor={"black"}
                marginLeft={1}
              />

              <Flex
                w={"50%"}
                flexDirection={"column"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <Text>{fecha}</Text>
                <Text>{hora}</Text>
              </Flex>
            </Flex>
          </>
        ) : (
          <>
            <Text>{fecha}</Text>

            <Flex alignItems={"end"} justifyContent={"end"}>
              <Text>{hora}</Text>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};

export default CardProduct;
