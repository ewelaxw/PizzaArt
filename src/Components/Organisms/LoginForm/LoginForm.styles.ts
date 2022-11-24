import styled from "styled-components";
import { Form } from "formik";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const LoginFormWrapper = styled(Form)`
  width: 600px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 30px 70px 70px 70px;
  grid-row-gap: 15px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const LoginHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
  color: ${(props: StyledTheme) => props.theme.colors.grenade};
`;
