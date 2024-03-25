import { useTheme } from "../hooks/useTheme";
import SearchEngine from "../components/SearchEngine";
import ListProductCard from "../components/ListProductCard";
import { useBuyListStore } from "../store/buyListStore";
import { useRedirect } from "../hooks/useRedirect";

function BuyListPage() {
  useRedirect();

  const { themeState } = useTheme();
  const products = useBuyListStore((state) => state.products);

  return (
    <>
      <div
        style={{
          color: themeState.ContentColor,
          backgroundColor: themeState.BackgroundColor,
        }}
        className="h-full min-h-screen transition-colors"
      >
        <div className="flex flex-col items-center w-full">
          <main
            className="transition-colors"
            style={{
              color: themeState.ContentColor,
            }}
          >
            <SearchEngine theme={themeState} products={products} />
            <ListProductCard products={products} />
          </main>
        </div>
      </div>
    </>
  );
}

export default BuyListPage;
