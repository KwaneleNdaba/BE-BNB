import { User } from "./user.interface";


export interface Order {
    id: string;
    createdAt: Date;
    price: number;
    products: any[]; // Replace any with the appropriate type
    status: string;
    intent_id?: string | null;
    user: User;
    userEmail: string;
  }