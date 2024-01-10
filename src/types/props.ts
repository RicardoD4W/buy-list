import { ReactNode } from "react";
import { ItemProduct } from "./api";

export interface LayoutProps {
  children: ReactNode;
}

export interface CustomTitleProps {
  className?: string;
  children: ReactNode;
  color: string;
  backgroundColor: string;
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
