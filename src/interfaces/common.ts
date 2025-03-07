import { User } from "./user";

export interface IBodyWithUserInfo {
  loggedUserInfo: User & { iat: number; exp: number };
}
