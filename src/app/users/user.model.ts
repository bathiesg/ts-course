import { baseModel } from './../baseModel';
export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export interface User extends baseModel{
  username: string,
  role: ROLES
}
