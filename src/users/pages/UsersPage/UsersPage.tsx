import UsersList from "../../components/UsersList/UsersList";
import "./UsersPage.css";

const UsersPage: React.FC = () => {
  return (
    <>
      <h1 className="page-title">Usuarios</h1>
      <UsersList users={[]} />
    </>
  );
};

export default UsersPage;
