import { useCallback, useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import "./UsersPage.css";
import { usersClient } from "../../client/UsersClient";
import User from "../../types";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = useCallback(async () => {
    try {
      const loadedUsers = await usersClient.getUsers();

      setUsers(loadedUsers);
    } catch {
      throw new Error("Error loading Users");
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <>
      <h1 className="page-title">Usuarios</h1>
      <UsersList users={users} />
    </>
  );
};

export default UsersPage;
