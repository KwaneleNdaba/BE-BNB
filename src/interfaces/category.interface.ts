import { Product } from "./product.interface";

export interface Category {
    id: string;
    createdAt: Date;
    title: string;
    desc: string;
    color: string;
    img: string;
    slug: string;
    products: Product[];
  }