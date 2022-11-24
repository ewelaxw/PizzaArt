import { Link } from "react-router-dom";
import { ButtonBasic } from "../../Components/Atoms/Buttons/Buttons";
import { routes } from "../../Routes/Routes";
import {
  ButtonBasicWrapper,
  HeroPageViewHeader,
  HeroPageViewWrapper,
} from "./HeroPageView.styles";

const HeroPageView = () => {
  const { registration, login } = routes;
  return (
    <HeroPageViewWrapper>
      <HeroPageViewHeader>Pizza-Art</HeroPageViewHeader>
      <ButtonBasicWrapper>
        <ButtonBasic as={Link} to={login}>
          Logowanie
        </ButtonBasic>
        <ButtonBasic as={Link} to={registration}>
          Rejestracja
        </ButtonBasic>
      </ButtonBasicWrapper>
    </HeroPageViewWrapper>
  );
};

export default HeroPageView;
