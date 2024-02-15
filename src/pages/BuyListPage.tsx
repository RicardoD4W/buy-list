import { useTheme } from "../hooks/useTheme";
import SearchEngine from "../components/SearchEngine";
import ListProductCard from "../components/ListProductCard";
import Header from "../components/Header";
import { usePreferenceStore } from "../store/preferencesStore";
import { useBuyListStore } from "../store/buyListStore";

function BuyListPage() {
  const { themeState } = useTheme();
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);
  const products = useBuyListStore((state) => state.products);

  let touchStart = 0;
  let touchEnd = 0;

  return (
    <>
      <div
        style={{
          color: themeState.ContentColor,
          backgroundColor: themeState.BackgroundColor,
        }}
        className="h-full min-h-screen transition-colors"
        onTouchStart={(e) => (touchStart = e.targetTouches[0].pageX)}
        onTouchEnd={(e) => {
          touchEnd = e.changedTouches[0].pageX;
          if (touchStart + 70 < touchEnd) toggleDrawer(true);
        }}
      >
        <div className="flex flex-col items-center w-full">
          <Header theme={themeState} />
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
