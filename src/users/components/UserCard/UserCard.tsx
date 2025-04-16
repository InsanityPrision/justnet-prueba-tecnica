import User from "../../types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const UserNameAndSurname = user.name.split(" ");

  return (
    <ol className="user-card">
      <span className="user-card__detail">{UserNameAndSurname[0]}</span>
      <span className="user-card__detail">{UserNameAndSurname[1]}</span>
      <span className="user-card__detail">{user.role_name}</span>
    </ol>
  );
};

export default UserCard;
