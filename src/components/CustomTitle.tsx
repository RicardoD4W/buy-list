import { type CustomTitleProps } from "../types/props";

function CustomTitle({ children }: CustomTitleProps) {
  return (
    <p>
      <span>{children}</span>
    </p>
  );
}

export default CustomTitle;
