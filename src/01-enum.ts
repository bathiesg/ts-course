export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}


export type USER = {
  username: string,
  role: ROLES
}


const username: USER = {
  username: "Samba",
  role: ROLES.CUSTOMER
}
