import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import ProgressBar from "../../Molecules/ProgressBar/ProgressBar";
import {
  BonAppetitOrderImg,
  ButtonBasicPreparationOrderFormWrapper,
  PreparationAndBonAppetitWrapper,
  PreparationOrderFormHeader,
  PreparationOrderFormWrapper,
  PreparationOrderImg,
} from "./PreparationOrderForm.styles";
import ImgPreparation from "../../../Assets/Images/Preparation.png";
import ImgBonAppetit from "../../../Assets/Images/BonApettit.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { UserContext } from "../../../Providers/UserProvider";

const PreparationOrderForm = () => {
  const { chooseType } = routes;
  const { handleLogout } = useContext(UserContext);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else return prev;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <PreparationOrderFormWrapper>
      <PreparationAndBonAppetitWrapper>
        <PreparationOrderImg
          isVisible={progress < 100 ? true : false}
          src={ImgPreparation}
          alt="ImgPreparation"
        />
        <BonAppetitOrderImg
          isVisible={progress < 100 ? false : true}
          src={ImgBonAppetit}
          alt="ImgBonAppetit"
        />
      </PreparationAndBonAppetitWrapper>

      <ProgressBar progress={progress} />
      <PreparationOrderFormHeader>Wybierz opcje</PreparationOrderFormHeader>

      <ButtonBasicPreparationOrderFormWrapper>
        <ButtonBasic onClick={() => navigate(chooseType)}>
          Nowe zamówienie
        </ButtonBasic>
        <ButtonBasic onClick={handleLogout}>Wyjdź</ButtonBasic>
      </ButtonBasicPreparationOrderFormWrapper>
    </PreparationOrderFormWrapper>
  );
};
export default PreparationOrderForm;
