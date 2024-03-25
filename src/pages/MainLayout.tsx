import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { usePreferenceStore } from "../store/preferencesStore";

export default function MainLayout({ title }: { title: string }) {
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);

  let touchStart = 0;
  let touchEnd = 0;
  return (
    <>
      <Header title={title} />

      <main
        className="min-h-screen"
        onTouchStart={(e) => (touchStart = e.targetTouches[0].pageX)}
        onTouchEnd={(e) => {
          touchEnd = e.changedTouches[0].pageX;
          if (touchStart + 70 < touchEnd) toggleDrawer(true);
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
