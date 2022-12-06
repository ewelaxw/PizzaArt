import { Link } from "react-router-dom";
import { ButtonBasic } from "../../Components/Atoms/Buttons/Buttons";
import { routes } from "../../Routes/Routes";
import {
  ButtonBasicWrapper,
  HeroPageViewImg,
  HeroPageViewWrapper,
} from "./HeroPageView.styles";
import ImgHeroPage from "../../Assets/Images/PizzaArt.png";

const HeroPageView = () => {
  const { registration, login } = routes;
  return (
    <HeroPageViewWrapper>
      <HeroPageViewImg src={ImgHeroPage} alt="ImgHeroPage" />
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
