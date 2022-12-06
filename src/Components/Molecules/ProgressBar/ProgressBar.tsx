import {
  BarIndicator,
  BarIndicatorAndTextWrapper,
  BarIndicatorText,
  BarIndicatorWrapper,
} from "./ProgressBar.styles";

type Props = {
  progress: number;
};
const ProgressBar = (props: Props) => {
  const { progress } = props;
  const preparationPhase = (progress: number) => {
    if (progress >= 100) {
      return "Gotowe";
    } else if (progress >= 90) {
      return "Wysyłamy";
    } else if (progress >= 70) {
      return "Kroimy i pakujemy";
    } else if (progress >= 50) {
      return "Pieczemy Twoją pizzę";
    } else if (progress >= 30) {
      return "Nakładamy składniki";
    }
    return "Ugniatamy ciasto";
  };
  return (
    <BarIndicatorAndTextWrapper>
      <BarIndicatorText>{preparationPhase(progress)}</BarIndicatorText>
      <BarIndicatorWrapper>
        <BarIndicator progress={progress - 100} />
      </BarIndicatorWrapper>
    </BarIndicatorAndTextWrapper>
  );
};

export default ProgressBar;
