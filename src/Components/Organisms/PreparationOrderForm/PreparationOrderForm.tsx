import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicPreparationOrderFormWrapper,
  PreparationOrderFormHeader,
  PreparationOrderFormWrapper,
} from "./PreparationOrderForm.styles";

const PreparationOrderForm = () => {
  return (
    <PreparationOrderFormWrapper>
      <PreparationOrderFormHeader>Przygotowanie</PreparationOrderFormHeader>

      <PreparationOrderFormHeader>Wybierz opcje</PreparationOrderFormHeader>

      <ButtonBasicPreparationOrderFormWrapper>
        <ButtonBasic>Nowe zamówienie</ButtonBasic>
        <ButtonBasic>Wyjdź</ButtonBasic>
      </ButtonBasicPreparationOrderFormWrapper>
    </PreparationOrderFormWrapper>
  );
};
export default PreparationOrderForm;
