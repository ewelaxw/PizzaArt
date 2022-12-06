import styled from "styled-components";
import { Form } from "formik";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const LoginFormWrapper = styled(Form)`
  width: 600px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  border-radius: 10px;
  padding: 40px 40px;
  display: grid;
  grid-template-rows: 30px 70px 70px 70px;
  grid-row-gap: 20px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const LoginHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-weight: normal;
  color: ${(props: StyledTheme) => props.theme.colors.grenade};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.largeXl};
`;
