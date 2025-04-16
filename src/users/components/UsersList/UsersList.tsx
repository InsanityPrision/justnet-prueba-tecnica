import User from "../../types";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
