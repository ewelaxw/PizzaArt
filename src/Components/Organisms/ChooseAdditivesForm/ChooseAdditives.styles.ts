import { Field, Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const ChooseAdditivesFormWrapper = styled(Form)`
  width: 1000px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.blueGray};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 50px auto 200px;
  grid-row-gap: 15px;
  align-self: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  position: relative;
  margin: 50px 0;
`;

export const ChooseAdditivesHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: ${(props: StyledTheme) => props.theme.colors.green};
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  border-radius: 10px;
  width: 700px;
  height: 40px;
  margin-bottom: 60px;
`;

export const ChooseAdditivesFormListWrapper = styled.ul`
  width: fit-content;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  row-gap: 10px;
`;

export const ChooseAdditivesFormListElement = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ChooseAdditivesFormCheckboxAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const ChooseAdditivesFormCheckbox = styled(Field)`
  width: 25px;
  height: 25px;
  background-color: ${(props: StyledTheme) => props.theme.colors.red};
  border-radius: 50%;
  margin: 0 20px;
`;

export const ChooseAdditivesFormLabel = styled.label`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
`;

export const ButtonBasicChooseAdditivesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChooseAdditivesFormImg = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  display: flex;
  justify-self: flex-end;
  align-self: flex-start;
  margin: 30px 0;
`;
