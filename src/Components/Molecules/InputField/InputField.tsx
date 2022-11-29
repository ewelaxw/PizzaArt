import { Input } from "../../Atoms/Input/Input";
import { Label } from "../../Atoms/Label/Label";
import { InputFieldWrapper } from "./InputField.styles";

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

const InputField = (props: InputProps) => {
  const { name, label, placeholder, type } = props;
  return (
    <InputFieldWrapper>
      <Label>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type ? type : "text"}
      />
    </InputFieldWrapper>
  );
};

export default InputField;
