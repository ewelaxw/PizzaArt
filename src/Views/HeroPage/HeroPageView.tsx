import { ButtonBasic } from "../../Components/Atoms/Buttons/Buttons";
import {
  ButtonBasicWrapper,
  HeroPageViewHeader,
  HeroPageViewWrapper,
} from "./HeroPageView.styles";

const HeroPageView = () => {
  return (
    <HeroPageViewWrapper>
      <HeroPageViewHeader>Pizza-Art</HeroPageViewHeader>
      <ButtonBasicWrapper>
        <ButtonBasic>Logowanie</ButtonBasic>
        <ButtonBasic>Rejestracja</ButtonBasic>
      </ButtonBasicWrapper>
    </HeroPageViewWrapper>
  );
};

export default HeroPageView;
