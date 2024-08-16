import { Category } from "./category.interface";

export interface Product {
    id: string;
    createdAt: Date;
    title: string;
    desc: string;
    img?: string | null;
    price: number;
    isFeatured: boolean;
    options: any[]; // Replace any with the appropriate type
    category: Category;
    catSlug: string;
  }