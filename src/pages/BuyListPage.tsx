import { useTheme } from "../hooks/useTheme";
import SearchEngine from "../components/SearchEngine";
import ListProductCard from "../components/ListProductCard";
import { useBuyListStore } from "../store/buyListStore";
import { useRedirect } from "../hooks/useRedirect";
import { useEffect, useState } from "react";
import { getAllProductsFromOwnRoom } from "../api/api";
import { useUserStore } from "../store/userStore";
import { MagnifyingGlass } from "react-loader-spinner";
import Pusher from "pusher-js";
import { ToastContainer } from "react-toastify";
import SearchEngineSkeleton from "../components/SearchEngineSkeleton";
// import { useGetNotificationPermission } from "../hooks/useGetNotificationPermission";

const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY;

function BuyListPage() {
  useRedirect();
  // useGetNotificationPermission();

  const { themeState } = useTheme();
  const products = useBuyListStore((state) => state.products);
  const { roomUUID } = useUserStore((state) => state.actualRoom);
  const setProducts = useBuyListStore((state) => state.setProducts);
  const user = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchProductsData = async () => {
    if (roomUUID === undefined) return;
    setIsLoading(true);
    await getAllProductsFromOwnRoom(roomUUID, user.access_token)
      .then((res) => {
        setProducts(res.products);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, [roomUUID]);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_KEY, {
      cluster: "eu",
    });

    const channel = pusher.subscribe(`room.${roomUUID}`);

    channel.bind(
      "App\\Events\\ProductEvent",
      async () => await fetchProductsData()
    );

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [roomUUID]);

  return (
    <>
      <ToastContainer />
      <div
        style={{
          color: themeState.ContentColor,
          backgroundColor: themeState.BackgroundColor,
        }}
        className="h-full py-16 transition-colors"
      >
        <div className="flex flex-col items-center w-full">
          <main
            className="transition-colors "
            style={{
              color: themeState.ContentColor,
            }}
          >
            {!isLoading ? (
              <>
                <SearchEngine theme={themeState} products={products} />
              </>
            ) : (
              <>
                <SearchEngineSkeleton theme={themeState} />
              </>
            )}

            {isLoading && (
              <div className="flex items-center justify-center">
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
              </div>
            )}
            {isError && <p>Error</p>}

            {!isLoading && products && (
              <>
                <ListProductCard products={products} />
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default BuyListPage;
