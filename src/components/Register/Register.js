import { Link } from "react-router-dom";

import "./Register.css";
import Form from "../Form/Form"
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";


const Register = ({ onRegister, registrationError }) => {
  const { inputs, validationMessages, isFormValid, handleInput } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(inputs);
  }

  return (
    <main className="register">
      <Form name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" submitDisabled={!isFormValid} serverError={registrationError} onSubmit={handleSubmit}>
        <Input
          label="Имя"
          name="name"
          value={inputs.name}
          error={validationMessages.name}
          handleChange={handleInput}
          minLength="2"
          maxLength="30"
          pattern="[a-zA-Zа-яёА-ЯЁ\s\-]+"
          title="Имя должно содержать только буквы, пробел или дефис."
          required
        />

        <Input
          label="E-mail"
          name="email"
          type="email"
          value={inputs.email}
          error={validationMessages.email}
          handleChange={handleInput}
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
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
      <p className="register__text">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link></p>
    </main>
  );
};

export default Register;
