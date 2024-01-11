import { type ReactNode } from "react";
import { type ItemProduct } from "./api";
import { type ColorTheme } from "./store";

export interface LayoutProps {
  children: ReactNode;
}

export interface CustomTitleProps {
  className?: string;
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
}

export interface ListProductCardProps {
  products: ItemProduct[];
}
export interface SearchEngineProps {
  products: ItemProduct[];
}
export interface ProductCardProps {
  product: ItemProduct;
}

export interface IconProps {
  color: string;
}

export interface ThemeProps {
  theme: ColorTheme;
}
