import { Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import BuyListPage from "./pages/BuyListPage";
import SecurePage from "./pages/SecurePage";
import LoginPage from "./pages/LoginPage";
import SelectRoom from "./pages/SelectRoom";
import MainLayout from "./pages/MainLayout";
import LogoutPage from "./pages/LogoutPage";
import ConfigurationPage from "./pages/ConfigurationPage";

function App() {
  const { themeState } = useTheme();

  return (
    <div
      style={{ backgroundColor: themeState.BackgroundColor }}
      className="min-h-screen"
    >
      <Routes>
        <Route path="/" element={<SecurePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/logout" element={<LogoutPage />}></Route>

        <Route element={<MainLayout title="Lista de la compra" />}>
          <Route path="/home/:roomUUID" element={<BuyListPage />}></Route>
        </Route>
        <Route element={<MainLayout title="Añadir producto" />}>
          <Route path="/addProduct/:userId" element={<>coming soon</>}></Route>
        </Route>

        <Route element={<MainLayout title="Elegir sala" />}>
          <Route path="/rooms/:userId" element={<SelectRoom />}></Route>
        </Route>

        <Route element={<MainLayout title="Configuración" />}>
          <Route path="/config/:userId" element={<ConfigurationPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
