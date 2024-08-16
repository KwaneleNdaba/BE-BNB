import { User } from "./user.interface";


export interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: User;
  }
  