import { useState } from "react";
import User from "../../types";
import "./UserDetail.css";

interface UserDetailProps {
  user: User | null;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  if (!user) {
    throw new Error("User not found");
  }

  const userCompletName = user.name.split(" ");
  const userName = userCompletName[0];
  const userSurname = userCompletName[1];

  const [{ name, surname, role }, setUserData] = useState({
    name: userName,
    surname: userSurname,
    role: user.role_name,
  });

  const updateUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((userData) => ({
      ...userData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form className="user-detail-container">
      <label className="user-detail" htmlFor="name">
        Nombre
      </label>
      <input
        className="user-information"
        type="text"
        id="name"
        value={name}
        onChange={updateUserData}
      />
      <label className="user-detail" htmlFor="surname">
        Apellidos
      </label>
      <input
        className="user-information"
        type="text"
        id="surname"
        value={surname}
        onChange={updateUserData}
      />
      <label className="user-detail" htmlFor="role">
        Role
      </label>
      <select className="user-information" defaultValue={role}>
        {}
      </select>
      <button className="save-form">Save</button>
    </form>
  );
};

export default UserDetail;
