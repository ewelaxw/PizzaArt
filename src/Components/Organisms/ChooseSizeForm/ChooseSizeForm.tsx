import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicChooseSizeWrapper,
  ChooseSizeFormCheckbox,
  ChooseSizeFormCheckboxAndLabelWrapper,
  ChooseSizeFormImg,
  ChooseSizeFormLabel,
  ChooseSizeFormListElement,
  ChooseSizeFormListWrapper,
  ChooseSizeFormWrapper,
  ChooseSizeHeader,
} from "./ChooseSizeForm.styles";
import ImgChooseSize from "../../../Assets/Images/SmallAndBig.svg";

const ChooseSizeForm = () => {
  return (
    <ChooseSizeFormWrapper>
      <ChooseSizeHeader>Wybierz rozmiar pizzy</ChooseSizeHeader>

      <ChooseSizeFormListWrapper>
        <ChooseSizeFormListElement>
          <ChooseSizeFormCheckboxAndLabelWrapper>
            <ChooseSizeFormCheckbox />
            <ChooseSizeFormLabel>Mała</ChooseSizeFormLabel>
          </ChooseSizeFormCheckboxAndLabelWrapper>

          <ChooseSizeFormCheckboxAndLabelWrapper>
            <ChooseSizeFormCheckbox />
            <ChooseSizeFormLabel>Duża</ChooseSizeFormLabel>
          </ChooseSizeFormCheckboxAndLabelWrapper>
        </ChooseSizeFormListElement>
      </ChooseSizeFormListWrapper>
      <ButtonBasicChooseSizeWrapper>
        <ButtonBasic>Dodaj</ButtonBasic>
      </ButtonBasicChooseSizeWrapper>
      <ChooseSizeFormImg src={ImgChooseSize} alt="ImgChooseSize" />
    </ChooseSizeFormWrapper>
  );
};

export default ChooseSizeForm;
