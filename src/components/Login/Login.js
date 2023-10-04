import { Link } from "react-router-dom";

import "./Login.css";
import Form from "../Form/Form"
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";

const Login = ({ onLogin, loginError }) => {

  const { inputs, validationMessages, isFormValid, handleInput } = useForm({
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(inputs);
  }

  return (
    <main className="login">
      <Form name="login" title="Рады видеть!" buttonText="Войти" submitDisabled={!isFormValid} serverError={loginError} onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          value={inputs.email}
          error={validationMessages.email}
          handleChange={handleInput}
          required
        />

        <Input
          label="Пароль"
          name="password"
          type="password"
          value={inputs.password}
          error={validationMessages.password}
          handleChange={handleInput}
          minLength="4"
          maxLength="100"
          required
        />

      </Form>
      <p className="login__text">Ещё не зарегистрированы? <Link className="login__link" to="/signup">Регистрация</Link></p>
    </main>
  );
};

export default Login;
