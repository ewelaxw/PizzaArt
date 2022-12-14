import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const FooterWrapper = styled.footer`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  padding: 0 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const FooterText = styled.span`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.medium};
`;
