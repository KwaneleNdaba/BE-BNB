import { Account } from "./account.interface";
import { Order } from "./order.interface";
import { Session } from "./session.interface";

export interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    isAdmin: boolean;
    accounts: Account[];
    sessions: Session[];
    orders: Order[];
  }