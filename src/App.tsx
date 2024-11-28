import { Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import BuyListPage from "./pages/BuyListPage";
import SecurePage from "./pages/SecurePage";
import LoginPage from "./pages/LoginPage";
import SelectRoomPage from "./pages/SelectRoomPage";
import MainLayout from "./pages/MainLayout";
import LogoutPage from "./pages/LogoutPage";
import ConfigurationPage from "./pages/ConfigurationPage";
import AddProductPage from "./pages/AddProductPage";
import { useEffect } from "react";
import { changeBackgroundColor } from "./helpers/functions";
import { useUserStore } from "./store/userStore";
import { useGetNotificationPermission } from "./hooks/useGetNotificationPermission";
import { subscriptionSW } from "./helpers/subscriptionSW";

function App() {
  const { themeState } = useTheme();
  const roomName = useUserStore((state) => state.actualRoom.roomName);

  useEffect(() => {
    changeBackgroundColor(themeState.BackgroundColor);
  }, [themeState]);

  const { access_token } = useUserStore((state) => state.user);
  const { permissionGranted } = useGetNotificationPermission();
  useEffect(() => {
    if (!access_token) return;

    if (permissionGranted) {
      subscriptionSW(access_token);
    }
  }, [permissionGranted, access_token]);

  return (
    <div
      style={{ backgroundColor: themeState.BackgroundColor }}
      className="min-h-screen"
    >
      <Routes>
        <Route path="/" element={<SecurePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/logout" element={<LogoutPage />}></Route>

        <Route
          element={<MainLayout title={roomName || "Lista de la compra"} />}
        >
          <Route path="/home/:roomUUID" element={<BuyListPage />}></Route>
        </Route>
        <Route element={<MainLayout title="Añadir producto" />}>
          <Route
            path="/addProduct/:userId"
            element={<AddProductPage />}
          ></Route>
        </Route>

        <Route element={<MainLayout title="Elegir sala" />}>
          <Route path="/rooms/:userId" element={<SelectRoomPage />}></Route>
        </Route>

        <Route element={<MainLayout title="Configuración" />}>
          <Route path="/config/:userId" element={<ConfigurationPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
