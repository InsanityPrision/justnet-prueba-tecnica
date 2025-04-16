import { NavLink } from "react-router";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="" className={"nav-menu__link"}>
        <img
          src="./icons/user.svg"
          alt="Ir a usuarios"
          width={20}
          height={20}
        />
        <span className="nav-menu__text">Usuarios</span>
      </NavLink>
    </nav>
  );
};

export default NavMenu;
