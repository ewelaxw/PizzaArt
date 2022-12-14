import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const HeroPageViewWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 200px 200px;
  padding: 30px;
  grid-row-gap: 20px;
`;

export const HeroPageViewImg = styled.img`
  width: auto;
  height: auto;
  transform: scale(2);
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  display: flex;
  justify-self: center;
  align-self: center;
`;

export const ButtonBasicWrapper = styled.div`
  width: 35%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  justify-self: center;
`;
