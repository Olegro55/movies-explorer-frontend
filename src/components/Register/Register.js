import { Link } from "react-router-dom";

import "./Register.css";
import Form from "../Form/Form"
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";


const Register = () => {

  const { inputs, validationMessages, isFormValid, handleInput } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <main className="register">
      <Form name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" submitDisabled={!isFormValid}>
        <Input
          label="Имя"
          name="name"
          value={inputs.name}
          error={validationMessages.name}
          handleChange={handleInput}
          minLength="2"
          maxLength="30"
          required
        />

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
          required
        />

      </Form>
      <p className="register__text">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link></p>
    </main>
  );
};

export default Register;
