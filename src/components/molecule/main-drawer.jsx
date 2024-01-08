import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  Select,
  Textarea,
  useDisclosure,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputField,
} from "@chakra-ui/react";
import IconDrawer from "../icons/icon-drawer";
import { useForm } from "../../hooks/useForm";
import { useOptions } from "../../hooks/useOptions";
import { useOptionsStorage } from "../../stores/optionsStorage";

const MainDrawer = () => {
  const { palett, drawerPosition } = useOptions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmitForm } = useForm(onClose);
  const { options } = useOptionsStorage();

  return (
    <>
      <Button
        colorScheme={palett.button}
        onClick={onOpen}
        size={"sm"}
        marginLeft={1}
      >
        <IconDrawer />
      </Button>

      <Drawer
        placement={drawerPosition ?? "left"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            textAlign={"center"}
            marginBottom={5}
          >
            Añadir producto a la lista de la compra
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection={"column"} justifyContent={"center"} gap={5}>
              <FormControl as="form" onSubmit={handleSubmitForm}>
                <FormLabel>
                  Nombre:{" "}
                  <Input
                    focusBorderColor={options.theme + ".200"}
                    required
                    type="text"
                    name="nombre"
                    placeholder="Manzanas, Tomates..."
                  />
                </FormLabel>
                <FormLabel>
                  Cantidad{" "}
                  <NumberInput
                    focusBorderColor={options.theme + ".200"}
                    max={99}
                    min={1}
                    required
                    type="number"
                    name="cantidad"
                    defaultValue={1}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormLabel>

                <FormLabel>
                  Supermercado
                  <Select
                    name="supermercado"
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
                <FormLabel>
                  Descripcción{" "}
                  <Textarea
                    focusBorderColor={options.theme + ".200"}
                    placeholder="Descripcción, anotación u aclaración"
                    size="md"
                    resize={"none"}
                    name="descripccion"
                  />
                </FormLabel>
                <ButtonGroup
                  display={"flex"}
                  justifyContent={"space-evenly"}
                  marginTop={"10"}
                >
                  <Button onClick={onClose} colorScheme="red">
                    Cancelar
                  </Button>
                  <Button as="button" type="submit" colorScheme={palett.button}>
                    Añadir
                  </Button>
                </ButtonGroup>
              </FormControl>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainDrawer;
