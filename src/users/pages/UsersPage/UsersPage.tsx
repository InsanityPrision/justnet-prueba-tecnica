import UsersList from "../../components/UsersList/UsersList";

const UsersPage: React.FC = () => {
  return (
    <>
      <h1>Usuarios</h1>
      <UsersList users={[]} />
    </>
  );
};

export default UsersPage;
