import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const RegistrationFormWrapper = styled(Form)`
  width: 600px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 30px 70px 70px 70px 70px 70px 70px;
  grid-row-gap: 15px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const RegistrationHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-weight: normal;
  color: ${(props: StyledTheme) => props.theme.colors.grenade};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.largeXl};
`;
