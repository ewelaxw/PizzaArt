import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicSummaryFormWrapper,
  SummaryFormHeader,
  SummaryFormListElement,
  //SummaryFormListWrapper,
  SummaryFormText,
  SummaryFormTextWrapper,
  SummaryFormWrapper,
} from "./SummaryForm.styles";

const SummaryForm = () => {
  return (
    <SummaryFormWrapper>
      <SummaryFormHeader>Podsumowanie</SummaryFormHeader>

      <SummaryFormListElement>
        <SummaryFormTextWrapper>
          <SummaryFormText>
            Pizza: Margherita Rozmiar: Small Cena: 17 zł
          </SummaryFormText>
        </SummaryFormTextWrapper>

        <SummaryFormTextWrapper>
          <SummaryFormText>Dodatki:</SummaryFormText>
          <SummaryFormText>Cheese 7 zł</SummaryFormText>
          <SummaryFormText>Chilli 6 zł</SummaryFormText>
          <SummaryFormText>TomatoSauce 6 zł</SummaryFormText>
        </SummaryFormTextWrapper>

        <SummaryFormTextWrapper>
          <SummaryFormText>Cena: 36 zł</SummaryFormText>
        </SummaryFormTextWrapper>

        <SummaryFormTextWrapper>
          <SummaryFormText>Adres dostawy: </SummaryFormText>
          <SummaryFormText>Miasto: gg</SummaryFormText>
          <SummaryFormText>Ulica i nr: gg</SummaryFormText>
        </SummaryFormTextWrapper>
      </SummaryFormListElement>

      <ButtonBasicSummaryFormWrapper>
        <ButtonBasic>Zaakceptuj</ButtonBasic>
        <ButtonBasic>Cofnij</ButtonBasic>
      </ButtonBasicSummaryFormWrapper>
    </SummaryFormWrapper>
  );
};
export default SummaryForm;
