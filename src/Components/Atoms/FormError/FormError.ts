import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const FormError = styled.span`
  width: 100%;
  padding: 10px;
  color: red;
  background-color: ${(props: StyledTheme) => props.theme.colors.pink};
  border-radius: 10px;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
`;

export const SelectError = styled(FormError)`
  width: fit-content;
  min-width: 300px;
  display: flex;
  justify-self: center;
  justify-content: center;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
`;
