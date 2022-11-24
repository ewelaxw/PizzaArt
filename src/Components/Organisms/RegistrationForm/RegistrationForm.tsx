import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import InputField from "../../Molecules/InputField/InputField";
import {
  RegistrationFormWrapper,
  RegistrationHeader,
} from "./RegistrationForm.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../../Routes/Routes";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";

interface MyFormValues {
  user: string;
  city: string;
  streetAndNumber: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegistrationForm = () => {
  const initialValues: MyFormValues = {
    user: "",
    city: "",
    streetAndNumber: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const { registration } = routes;

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (value: MyFormValues) => {
    console.log("test");
    setError("");
    navigate(registration, { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        handleSubmit(values);
        console.log("Submit");

        action.setSubmitting(false);
      }}
    >
      <RegistrationFormWrapper>
        <RegistrationHeader>Rejestracja</RegistrationHeader>
        {error ? (
          <FormError>
            Podane dane są nieprawidłowe. <br />
            Upewnij się, że podane email i hasło są poprawne
          </FormError>
        ) : null}

        <InputField name="name" placeholder="Imię" label="Imię" />
        <InputField
          name="city"
          placeholder="Miasto"
          label="Miasto"
          type="city"
        />
        <InputField
          name="streetAndNumber"
          placeholder="Ulica i nr"
          label="Ulica i nr"
          type="streetAndNumber"
        />
        <InputField
          name="email"
          placeholder="Email"
          label="Email"
          type="email"
        />
        <InputField
          name="password"
          placeholder="Hasło"
          label="Hasło"
          type="password"
        />
        <InputField
          name="repeatpassword"
          placeholder="Powtórz hasło"
          label="Powtórz hasło"
          type="repeatPassword"
        />
        <ButtonBasic type={"submit"}>Zarejestruj</ButtonBasic>
      </RegistrationFormWrapper>
    </Formik>
  );
};

export default RegistrationForm;
