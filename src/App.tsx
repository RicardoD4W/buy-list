import { Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import BuyListPage from "./pages/BuyListPage";
import SecurePage from "./pages/SecurePage";

function App() {
  const { themeState } = useTheme();

  return (
    <div
      style={{ backgroundColor: themeState.BackgroundColor }}
      className="min-h-screen"
    >
      <Routes>
        <Route path="/" element={<SecurePage />}></Route>
        <Route path="/login" element={<>login</>}></Route>
        <Route path="/home/:idUser" element={<BuyListPage />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </div>
  );
}

export default App;
