import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

type VisibilityProps = {
  isVisible: boolean;
};

export const PreparationOrderFormWrapper = styled.div`
  width: 1000px;
  height: auto;
  min-height: 100vh;
  background-color: ${(props: StyledTheme) => props.theme.colors.blueGray};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-auto-rows: auto;
  row-gap: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
`;

export const PreparationOrderFormHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
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

export const PreparationAndBonAppetitWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 100px;
  display: flex;
  justify-self: center;
  align-self: center;
`;
export const PreparationOrderImg = styled.img`
  width: 500px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s;
  opacity: ${(props: StyledTheme & VisibilityProps) =>
    props.isVisible ? "1" : `0`};
`;

export const BonAppetitOrderImg = styled.img`
  width: 500px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s 0.5s;
  opacity: ${(props: StyledTheme & VisibilityProps) =>
    props.isVisible ? "1" : `0`};
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
