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
      <div className="page-container">
        <h1 className="page-title">Usuarios</h1>
        <div className="users-table">
          <div className="users-table__fields">
            <span className="field">Nombre</span>
            <span className="field">Apellidos</span>
            <span className="field">Role</span>
          </div>
          <UsersList users={users} />
        </div>
      </div>
    </>
  );
};

export default UsersPage;
