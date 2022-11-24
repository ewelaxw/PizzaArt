import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const ButtonBasic = styled.button`
  width: 146px;
  height: 39px;
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  color: ${(props: StyledTheme) => props.theme.colors.green};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
