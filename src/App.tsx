import { Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import BuyListPage from "./pages/BuyListPage";
import SecurePage from "./pages/SecurePage";
import LoginPage from "./pages/LoginPage";

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
        <Route path="/home/:userId" element={<BuyListPage />}></Route>
        <Route path="/addProduct/:userId" element={<>coming soon</>}></Route>
        <Route path="/rooms/:userId" element={<>coming soon</>}></Route>
        <Route path="/config/:userId" element={<>coming soon</>}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </div>
  );
}

export default App;
