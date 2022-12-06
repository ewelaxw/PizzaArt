import { routes } from "../../../Routes/Routes";
import InputField from "../../Molecules/InputField/InputField";
import { LoginFormWrapper, LoginHeader } from "./LoginForm.styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";
import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import axios from "axios";
import { UserContext } from "../../../Providers/UserProvider";

interface MyFormValues {
  name: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = {
    name: "",
    password: "",
  };

  const { chooseType } = routes;

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { handleSetUser } = useContext(UserContext);

  const handleSubmit = async (values: MyFormValues) => {
    const { name, password } = values;
    axios
      .post("http://localhost:8000/Login", {
        name: name,
        password: password,
      })
      .then((response: any) => {
        const user = response.data;
        handleSetUser(user);
        navigate(chooseType, { replace: true });
      })
      .catch(() => setError("Nie udało się zalogować"));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        handleSubmit(values);

        action.setSubmitting(false);
      }}
    >
      <LoginFormWrapper>
        <LoginHeader>Logowanie</LoginHeader>
        {error ? (
          <FormError>
            Podane dane są nieprawidłowe. <br />
            Upewnij się, że podane dane są prawidłowe
          </FormError>
        ) : null}
        <InputField name="name" placeholder="Imię" label="Imię" type="text" />
        <InputField
          name="password"
          placeholder="Hasło"
          label="Hasło"
          type="password"
        />
        <ButtonBasic type={"submit"}>Zaloguj</ButtonBasic>
      </LoginFormWrapper>
    </Formik>
  );
};
export default LoginForm;
