import { Field, Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const ChooseSizeFormWrapper = styled(Form)`
  width: 1000px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.blueGray};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 50px 200px 200px;
  grid-row-gap: 15px;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: 1fr;
  margin: 50px 0;
  position: relative;
`;

export const ChooseSizeHeader = styled.h2`
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

export const ChooseSizeFormListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ChooseSizeFormListElement = styled.li`
  width: fit-content;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  row-gap: 10px;
`;

export const ChooseSizeFormRadioButtonAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const ChooseSizeFormRadioButton = styled(Field)`
  width: 25px;
  height: 25px;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  border-radius: 50%;
  margin: 0 20px;
  appearance: none;

  :checked {
    background-color: ${(props: StyledTheme) => props.theme.colors.red};
  }
`;

export const ChooseSizeFormLabel = styled.label`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
`;

export const ButtonBasicChooseSizeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChooseSizeFormImg = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  display: flex;
  justify-self: flex-end;
  align-self: flex-start;
  margin: 60px 0;
`;
