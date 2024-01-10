import { type CustomTitleProps } from "../types/props";

function CustomTitle({
  className,
  children,
  backgroundColor,
  color,
}: CustomTitleProps) {
  return (
    <header
      className={className}
      style={{
        color,
        backgroundColor,
      }}
    >
      <span>{children}</span>
    </header>
  );
}

export default CustomTitle;
