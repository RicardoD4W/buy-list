import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Radio,
  RadioGroup,
  Flex,
  Text,
  Divider,
  FormControl,
} from "@chakra-ui/react";
import IconOptions from "../icons/icon-options";
import { useOptions } from "../../hooks/useOptions";
import { useOptionsStorage } from "../../stores/optionsStorage";

const OptionsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { palett } = useOptions();
  const { setOptions, options } = useOptionsStorage();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fields = new FormData(e.target);
    let theme = fields.get("theme");
    let position = fields.get("position");
    setOptions({ theme, position });
    onClose();
  };

  return (
    <>
      {" "}
      <Button
        colorScheme={palett.button}
        onClick={onOpen}
        size={"sm"}
        marginRight={1}
      >
        <IconOptions />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <FormControl as="form" onSubmit={handleSubmitForm}>
            <ModalHeader>Configuración</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction={["column"]} gap={5}>
                <Flex direction={["column"]}>
                  <Text
                    textAlign={"center"}
                    fontWeight={"semibold"}
                    marginBottom={2}
                    textDecoration={"underline"}
                  >
                    Tema principal
                  </Text>
                  <RadioGroup
                    name="theme"
                    defaultValue={options.theme ?? "green"}
                    display={"flex"}
                    gap={5}
                    justifyContent={"space-evenly"}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={4}
                      flexWrap={"wrap"}
                    >
                      <Radio size="md" colorScheme="green" value="green">
                        <Text color="green" fontWeight={"semibold"}>
                          Verde
                        </Text>
                      </Radio>
                      <Radio size="md" colorScheme="cyan" value="cyan">
                        <Text color="cyan" fontWeight={"semibold"}>
                          Cyan
                        </Text>
                      </Radio>
                      <Radio size="md" colorScheme="blue" value="blue">
                        <Text color="blue" fontWeight={"semibold"}>
                          Azul
                        </Text>
                      </Radio>
                      <Radio size="md" colorScheme="teal" value="teal">
                        <Text color="teal" fontWeight={"semibold"}>
                          Teal
                        </Text>
                      </Radio>
                      <Radio size="md" colorScheme="pink" value="pink">
                        <Text color="pink" fontWeight={"semibold"}>
                          Rosa
                        </Text>
                      </Radio>
                      <Radio size="md" colorScheme="purple" value="purple">
                        <Text color="purple" fontWeight={"semibold"}>
                          Violeta
                        </Text>
                      </Radio>
                      <Radio size="md" colorScheme="orange" value="orange">
                        <Text color="orange" fontWeight={"semibold"}>
                          Naranja
                        </Text>
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>

                <Divider />
                <Flex direction={["column"]}>
                  <Text
                    textAlign={"center"}
                    fontWeight={"semibold"}
                    marginBottom={2}
                    textDecoration={"underline"}
                  >
                    Posición del Drawer
                  </Text>
                  <RadioGroup
                    name="position"
                    defaultValue={options.position ?? "left"}
                    display={"flex"}
                    gap={5}
                    justifyContent={"space-evenly"}
                  >
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={4}
                      flexWrap={"wrap"}
                    >
                      <Radio size="md" value="left">
                        <Text fontWeight={"semibold"}>Izquierda</Text>
                      </Radio>
                      <Radio size="md" value="top">
                        <Text fontWeight={"semibold"}>Arriba</Text>
                      </Radio>
                      <Radio size="md" value="right">
                        <Text fontWeight={"semibold"}>Derecha</Text>
                      </Radio>
                      <Radio size="md" value="bottom">
                        <Text fontWeight={"semibold"}>Abajo</Text>
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                variant="ghost"
                mr={3}
                as="button"
                type="reset"
                onClick={onClose}
              >
                Cerrar
              </Button>
              <Button
                colorScheme={palett.button}
                variant="ghost"
                type="submit"
                as="button"
              >
                Guardar
              </Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OptionsModal;
