import { useTheme } from "../hooks/useTheme";
import SearchEngine from "../components/SearchEngine";
import ListProductCard from "../components/ListProductCard";
import { useBuyListStore } from "../store/buyListStore";
import { useRedirect } from "../hooks/useRedirect";
import { useEffect } from "react";
import { getAllProductsFromOwnRoom } from "../api/api";
import { useUserStore } from "../store/userStore";
import { MagnifyingGlass } from "react-loader-spinner";

function BuyListPage() {
  useRedirect();

  const { themeState } = useTheme();
  const products = useBuyListStore((state) => state.products);
  const { roomUUID } = useUserStore((state) => state.actualRoom);
  const setProducts = useBuyListStore((state) => state.setProducts);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (roomUUID === undefined) return;
    getAllProductsFromOwnRoom(roomUUID, user.access_token).then((res) => {
      setProducts(res.products);
    });
  }, [roomUUID]);

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

            {products ? (
              <ListProductCard products={products} />
            ) : (
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default BuyListPage;
