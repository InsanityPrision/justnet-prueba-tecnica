import User from "../../types";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const UserNameAndSurname = user.name.split(" ");

  return (
    <ol className="user-card">
      <span>{UserNameAndSurname[0]}</span>
      <span>{UserNameAndSurname[1]}</span>
      <span>{user.role_name}</span>
    </ol>
  );
};

export default UserCard;
