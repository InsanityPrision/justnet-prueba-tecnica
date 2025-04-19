import { NavLink } from "react-router";
import "./UserDetailPage.css";
import UserDetail from "../../components/UserDetail/UserDetail";

const UserDetailPage: React.FC = () => {
  return (
    <div className="page-container">
      <button className="back-button">
        <NavLink to={"/users"}>{"< Back"}</NavLink>
      </button>
      <h1>Detalles de usuario</h1>
      <UserDetail
        user={{
          id: 1,
          name: "Erik Riquelme",
          email: "erikone2311@gmail.com",
          role_name: "Admin",
        }}
      />
    </div>
  );
};

export default UserDetailPage;
