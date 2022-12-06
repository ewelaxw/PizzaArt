import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import InputField from "../../Molecules/InputField/InputField";
import {
  RegistrationFormWrapper,
  RegistrationHeader,
} from "./RegistrationForm.styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { routes } from "../../../Routes/Routes";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";
import axios from "axios";
import { UserContext } from "../../../Providers/UserProvider";

interface MyFormValues {
  user: string;
  city: string;
  streetAndNumber: string;
  password: string;
  repeatPassword: string;
}

const RegistrationForm = () => {
  const initialValues: MyFormValues = {
    user: "",
    city: "",
    streetAndNumber: "",
    password: "",
    repeatPassword: "",
  };

  const { chooseType } = routes;

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { handleSetUser } = useContext(UserContext);

  const handleSubmit = (values: MyFormValues) => {
    const { user, city, streetAndNumber, password } = values;
    axios
      .post("http://localhost:8000/Register", {
        name: user,
        password,
        city,
        streetAndNumber,
      })
      .then((response: any) => {
        const user = response.data;
        handleSetUser(user);
        navigate(chooseType, { replace: true });
      })
      .catch(() => setError("Nie udało się zarejestrować"));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        handleSubmit(values);

        action.setSubmitting(false);
      }}
    >
      <RegistrationFormWrapper>
        <RegistrationHeader>Rejestracja</RegistrationHeader>
        {error ? (
          <FormError>
            Podane dane są nieprawidłowe. <br />
            Upewnij się, że podane hasła są takie same
          </FormError>
        ) : null}

        <InputField name="user" placeholder="Imię" label="Imię" />
        <InputField
          name="city"
          placeholder="Miasto"
          label="Miasto"
          type="text"
        />
        <InputField
          name="streetAndNumber"
          placeholder="Ulica i nr"
          label="Ulica i nr"
          type="text"
        />
        <InputField
          name="password"
          placeholder="Hasło"
          label="Hasło"
          type="password"
        />
        <InputField
          name="repeatPassword"
          placeholder="Powtórz hasło"
          label="Powtórz hasło"
          type="password"
        />
        <ButtonBasic type={"submit"}>Zarejestruj</ButtonBasic>
      </RegistrationFormWrapper>
    </Formik>
  );
};

export default RegistrationForm;
