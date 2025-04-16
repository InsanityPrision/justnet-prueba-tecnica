import { useState, useCallback } from "react";
import { usersClient } from "../client/UsersClient";
import User from "../types";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = useCallback(async () => {
    try {
      const loadedUsers = await usersClient.getUsers();

      setUsers(loadedUsers);
    } catch {
      throw new Error("Error loading Users");
    }
  }, []);

  return {
    users,
    loadUsers,
  };
};

export default useUsers;
