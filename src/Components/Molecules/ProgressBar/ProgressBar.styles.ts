import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";
type Props = {
  progress: number;
};

export const BarIndicatorWrapper = styled.div`
  width: 500px;
  height: 50px;
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  border-radius: 15px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow-x: hidden;
  position: relative;
`;
export const BarIndicator = styled.div`
  width: 500px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  transition: all 0.5s;
  transform: translateX(
    ${(props: StyledTheme & Props) => `${props.progress}%`}
  );
`;

export const BarIndicatorText = styled.div`
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.largeM};
  color: ${(props: StyledTheme) => props.theme.colors.blue};
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  width: 100%;
  padding: 5px 15px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  align-self: flex-start;
  justify-content: center;
`;

export const BarIndicatorAndTextWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
`;
