import { NavLink } from "react-router";
import "./UserDetailPage.css";

const UserDetailPage: React.FC = () => {
  return (
    <div className="page-container">
      <button className="back-button">
        <NavLink to={"/users"}>{"< Back"}</NavLink>
      </button>
      <h1>Detalles de usuario</h1>
    </div>
  );
};

export default UserDetailPage;
