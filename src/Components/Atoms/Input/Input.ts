import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: ${(props: StyledTheme) => props.theme.colors.blueGray};
`;
