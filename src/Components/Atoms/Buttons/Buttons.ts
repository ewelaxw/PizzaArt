import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const ButtonBasic = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  color: ${(props: StyledTheme) => props.theme.colors.green};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  transition: all 0.5s;
  :hover {
    cursor: pointer;
    color: ${(props: StyledTheme) => props.theme.colors.blue};
  }
`;

export const NavigationButton = styled(ButtonBasic)`
  width: 150px;
  height: 40px;
`;
