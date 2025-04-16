import { Outlet } from "react-router";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <NavMenu />
        <Outlet />
      </main>
    </>
  );
};

export default App;
