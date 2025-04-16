import { Outlet } from "react-router";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <NavMenu />
        <Outlet />
      </main>
    </>
  );
};

export default App;
