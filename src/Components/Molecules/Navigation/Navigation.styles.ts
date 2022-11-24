import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";
import { Link } from "react-router-dom";
import PizzaLogo from "../../../Assets/Images/PizzaArtLogo.svg";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 40px;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100%;
  justify-items: flex-end;
  align-items: center;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
`;

export const NavigationLogo = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 5px 0;
  background-image: url(${PizzaLogo});
`;
