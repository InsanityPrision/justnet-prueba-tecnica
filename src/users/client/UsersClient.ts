import User from "../types";
import { UsersClientStructure } from "./types";

if (!import.meta.env.VITE_API_REST_URL) {
  throw new Error("Missing VITE_API_REST_URL");
}

class UsersClients implements UsersClientStructure {
  private readonly apiRestUrl = import.meta.env.VITE_API_REST_URL;
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${this.apiRestUrl}/users`);

    if (!response.ok) {
      throw new Error("Failed fetching users");
    }
    const responseBody = (await response.json()) as {
      data: {
        data: User[];
        nextPage: number;
        page: number;
        totalPages: number;
        totalRecords: number;
        totalWithoutFilter: number;
      };
      status: number;
    };

    const users = responseBody.data.data;

    return users;
  }
}

export const usersClient = new UsersClients();
