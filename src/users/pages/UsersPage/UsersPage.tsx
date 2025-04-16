import { useEffect } from "react";
import UsersList from "../../components/UsersList/UsersList";
import useUsers from "../../hooks/useUsers";
import "./UsersPage.css";

const UsersPage: React.FC = () => {
  const { users, loadUsers } = useUsers();

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
