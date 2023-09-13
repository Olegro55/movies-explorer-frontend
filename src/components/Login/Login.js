import { Link } from "react-router-dom";

import "./Login.css";
import Form from "../Form/Form"
import Input from "../Input/Input";

const Login = () => {
  return (
    <main className="login">
      <Form name="login" title="Рады видеть!" buttonText="Войти">
        <Input label="E-mail" name="email" />
        <Input label="Пароль" name="password" />
      </Form>
      <p className="login__text">Ещё не зарегистрированы? <Link className="login__link" to="/signup">Регистрация</Link></p>
    </main>
  );
};

export default Login;
