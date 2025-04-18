import { Navigate, Route } from "react-router";
import { Routes } from "react-router";
import App from "../components/App/App";
import UsersPage from "../users/pages/UsersPage/UsersPage";
import UserDetailPage from "../users/pages/UserDetailPage/UserDetailPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/users"} />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="user-detail" element={<UserDetailPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
