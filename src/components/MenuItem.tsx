import { MenuItemProps } from "../types/props";

function MenuItem({ to, children }: MenuItemProps) {
  return (
    <>
      <article className="flex items-center justify-center w-full gap-3 py-5 ">
        {children}
      </article>
    </>
  );
}

export default MenuItem;
