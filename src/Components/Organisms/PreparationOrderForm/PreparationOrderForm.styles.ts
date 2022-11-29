import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const PreparationOrderFormWrapper = styled.div`
  width: 1000px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.blueGray};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 50px;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: 1fr;
  margin: 50px 0;
`;

export const PreparationOrderFormHeader = styled.h2`
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
`;

export const ButtonBasicPreparationOrderFormWrapper = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  justify-self: center;
  justify-items: center;
  align-items: center;
`;
