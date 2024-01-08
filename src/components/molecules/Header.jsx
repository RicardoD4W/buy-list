import { useEffect, useState } from "react";
import { useMainStore } from "../../stores/mainStore";
import { Box, Heading, Flex } from "@chakra-ui/react";
import MainDrawer from "../molecule/main-drawer";
import OptionsModal from "../molecule/options-modal";
import { useOptions } from "../../hooks/useOptions";

const Header = () => {
  const { login } = useMainStore();
  const { palett } = useOptions();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) setFlag(true);
  }, [login]);

  return (
    <Box as="header" w="full" py={4} color="#FFF" background={palett.header}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <MainDrawer />

        <Heading as="h1" size="xl" textAlign={"center"}>
          Lista de la Compra
        </Heading>

        <OptionsModal />
      </Flex>
    </Box>
  );
};

export default Header;
