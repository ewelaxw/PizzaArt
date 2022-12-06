import { routes } from "../../../Routes/Routes";
import { NavigationButton } from "../../Atoms/Buttons/Buttons";
import { NavigationLogo, NavigationWrapper } from "./Navigation.styles";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Providers/UserProvider";

const Navigation = () => {
  const { index, registration, login } = routes;
  const location = useLocation();
  const { user, handleLogout } = useContext(UserContext);

  return (
    <NavigationWrapper>
      <NavigationLogo to={index} />
      {location.pathname === registration && (
        <NavigationButton as={Link} to={login}>
          Logowanie
        </NavigationButton>
      )}
      {location.pathname === login && (
        <NavigationButton as={Link} to={registration}>
          Rejestracja
        </NavigationButton>
      )}

      {user && (
        <NavigationButton onClick={handleLogout}>Wyloguj</NavigationButton>
      )}
    </NavigationWrapper>
  );
};
export default Navigation;
