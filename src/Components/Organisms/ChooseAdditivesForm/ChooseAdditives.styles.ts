import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const ChooseAdditivesFormWrapper = styled.form`
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
  position: relative;
  margin: 50px 0;
`;

export const ChooseAdditivesHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: ${(props: StyledTheme) => props.theme.colors.green};
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  border-radius: 10px;
  width: 500px;
  height: 40px;
  margin-bottom: 60px;
`;

export const ChooseAdditivesFormListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ChooseAdditivesFormListElement = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

export const ChooseAdditivesFormCheckboxAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const ChooseAdditivesFormCheckbox = styled.input`
  width: 15px;
  height: 15px;
  background-color: ${(props: StyledTheme) => props.theme.colors.red};
  border-radius: 50%;
  margin: 0 20px;
`;

export const ChooseAdditivesFormLabel = styled.label`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
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
`;
