import { Link } from "react-router-dom";
import { MenuItemProps } from "../types/props";
import { usePreferenceStore } from "../store/preferencesStore";

function MenuItem({ to, children }: MenuItemProps) {
  const toggleDrawer = usePreferenceStore((state) => state.toggleDrawer);

  return (
    <>
      <Link
        onClick={() => toggleDrawer(false)}
        to={to}
        className="flex items-center justify-center w-full gap-3 py-5 "
      >
        {children}
      </Link>
    </>
  );
}

export default MenuItem;
