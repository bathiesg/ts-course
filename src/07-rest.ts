import {USER, ROLES} from './01-enum'

const currentUser: USER = {
  username: "Samba",
  role: ROLES.CUSTOMER
}

export const checkRole = (...roles: string[]) => {
  return roles.includes(currentUser.role);
}

const rta = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta);
