import User from "../types";

export interface UsersClientStructure {
  getUsers(): Promise<User[]>;
}
