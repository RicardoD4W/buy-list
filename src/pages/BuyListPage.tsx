import { useTheme } from "../hooks/useTheme";
import SearchEngine from "../components/SearchEngine";
import CustomTitle from "../components/CustomTitle";
import ListProductCard from "../components/ListProductCard";
import { mockDataProducts } from "../data/mockData";

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
        className="h-screen transition-colors"
      >
        <div className="flex flex-col items-center w-full">
          <CustomTitle
            backgroundColor={themeState.HeaderColor}
            color={themeState.TitleColor}
            className="w-full p-4 text-3xl font-semibold text-center transition-colors "
          >
            Lista de la Compra
          </CustomTitle>
          <main
            className="transition-colors"
            style={{
              color: themeState.ContentColor,
            }}
          >
            <SearchEngine />
            <ListProductCard products={mockData} />
          </main>
        </div>
      </div>
    </>
  );
}

export default BuyListPage;
