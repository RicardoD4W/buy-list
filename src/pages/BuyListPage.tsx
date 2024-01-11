import { useTheme } from "../hooks/useTheme";
import SearchEngine from "../components/SearchEngine";
import ListProductCard from "../components/ListProductCard";
import { mockDataProducts } from "../data/mockData";
import Header from "../components/Header";

function BuyListPage() {
  const { themeState } = useTheme();

  const mockData = mockDataProducts;

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
          <Header theme={themeState} />
          <main
            className="transition-colors"
            style={{
              color: themeState.ContentColor,
            }}
          >
            <SearchEngine theme={themeState} />
            <ListProductCard products={mockData} />
          </main>
        </div>
      </div>
    </>
  );
}

export default BuyListPage;
