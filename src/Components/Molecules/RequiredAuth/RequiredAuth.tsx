import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import OrderProvider from "../../../Providers/OrderProvider/OrderProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { routes } from "../../../Routes/Routes";

const RequiredAuth = () => {
  const { index } = routes;
  const { user } = useContext(UserContext);
  return user ? (
    <OrderProvider>
      <Outlet />
    </OrderProvider>
  ) : (
    <Navigate to={index} />
  );
};
export default RequiredAuth;
