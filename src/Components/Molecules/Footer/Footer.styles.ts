import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const FooterWrapper = styled.footer`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  grid-row: 3/4;
  grid-template-columns: 100px 1fr 120px;
  grid-template-rows: 100%;
  padding: 0 10px;
  justify-content: center;
`;
