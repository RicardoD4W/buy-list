import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { usePreferenceStore } from "../store/preferencesStore";
import { DrawerPosition } from "../types/store";

export default function MainLayout({ title }: { title: string }) {
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);
  const drawerDirection = usePreferenceStore((state) => state.drawerDirection);

  let touchStartX = 0;

  const handleOnTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.targetTouches[0].pageX;
  };

  const handleOnTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].pageX;

    const wichDirection: { [key in DrawerPosition]: () => void } = {
      left: () => {
        if (touchStartX + 70 < touchEndX) toggleDrawer(true);
      },
      right: () => {
        if (touchStartX - 70 > touchEndX) toggleDrawer(true);
      },
    };

    wichDirection[drawerDirection]();
  };

  return (
    <div
      className="min-h-screen"
      onTouchStart={handleOnTouchStart}
      onTouchEnd={handleOnTouchEnd}
    >
      <Header title={title} />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
