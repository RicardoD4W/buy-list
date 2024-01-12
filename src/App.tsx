import { useTheme } from "./hooks/useTheme";
import BuyListPage from "./pages/BuyListPage";

function App() {
  const { themeState } = useTheme();

  // TODO Routing aquí
  return (
    <div style={{ backgroundColor: themeState.BackgroundColor }}>
      <BuyListPage />
    </div>
  );
}

export default App;
