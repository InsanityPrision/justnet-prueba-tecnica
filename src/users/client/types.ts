import { Role, User } from "../types";

export interface UsersClientStructure {
  getUsers(): Promise<User[]>;
  getRoles(): Promise<Role[]>;
}
