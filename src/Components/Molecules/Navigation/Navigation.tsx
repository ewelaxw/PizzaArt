import { routes } from "../../../Routes/Routes";
import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import { NavigationLogo, NavigationWrapper } from "./Navigation.styles";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { index, registration, login } = routes;
  const location = useLocation();
  return (
    <NavigationWrapper>
      <NavigationLogo to={index} />
      <ButtonBasic
        as={Link}
        to={location.pathname === registration ? login : registration}
      >
        {location.pathname === registration ? "Logowanie" : "Rejestracja"}
      </ButtonBasic>
    </NavigationWrapper>
  );
};
export default Navigation;
