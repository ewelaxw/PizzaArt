import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const SummaryWrapper = styled.div`
  width: fit-content;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.blueGray};
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 50px;
  align-self: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  margin: 50px 0;
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
`;

export const SummaryHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: ${(props: StyledTheme) => props.theme.colors.green};
  background-color: ${(props: StyledTheme) => props.theme.colors.grenade};
  border-radius: 10px;
  width: 700px;
  height: 40px;
`;

export const SummaryListWrapper = styled.ul`
  width: fit-content;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  row-gap: 10px;
  padding: 0;
`;

export const SummaryListElement = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const SummaryInfo = styled.div`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};

  display: flex;
  flex-direction: row;
`;

export const SummaryBoldSpan = styled.span`
  font-weight: bold;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  margin-right: 5px;
`;

export const SummarySpan = styled.span`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  margin-right: 20px;
`;

export const SummaryPrice = styled.div`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  width: 190px;
  border-top: 2px solid ${(props: StyledTheme) => props.theme.colors.black};
`;

export const SummaryAddressInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummaryAddressInfoSpan = styled.span`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.roboto};

  display: flex;
  flex-direction: row;
`;

export const ButtonBasicSummaryFormWrapper = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  justify-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
