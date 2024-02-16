import { Link } from "react-router-dom";
import { MenuItemProps } from "../types/props";

function MenuItem({ to, children }: MenuItemProps) {
  return (
    <>
      <Link
        to={to}
        className="flex items-center justify-center w-full gap-3 py-5 "
      >
        {children}
      </Link>
    </>
  );
}

export default MenuItem;
