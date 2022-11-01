import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string;
    age: Number,
    country: String
    description: string;
}

