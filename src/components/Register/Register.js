import { Link } from "react-router-dom";

import "./Register.css";
import Form from "../Form/Form"
import Input from "../Input/Input";


const Register = () => {
  return (
    <main className="register">
      <Form name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться">
        <Input label="Имя" name="name" />
        <Input label="E-mail" name="email" />
        <Input label="Пароль" name="password" /> 
      </Form>
      <p className="register__text">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link></p>
    </main>
  );
};

export default Register;
