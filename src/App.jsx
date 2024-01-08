import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/molecules/header";
import { Box } from "@chakra-ui/react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default App;
