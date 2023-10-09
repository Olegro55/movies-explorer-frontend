import React from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import { auth, api } from '../../utils/MainApi.js';

import "./App.css";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    id: '',
    name: '',
    email: '',
  });
  const [registrationError, setRegistrationError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [updateMessage, setUpdateMessage] = React.useState({
    success: false,
    message: '',
  });

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setCurrentUser({
            id: res._id,
            name: res.name,
            email: res.email,
          });
          setIsLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  function handleMenuOpen() { setMenuOpen(true) }
  function handleMenuClose() { setMenuOpen(false) }

  function handleRegister(inputs) {
    auth
      .register(inputs)
      .then(_ => {
        handleLogin(inputs);
      })
      .catch((err) => {
        if (err.status === 409)
          err.json().then(res => { setRegistrationError(res.message) });
        else
          setRegistrationError('При регистрации пользователя произошла ошибка.');
      });
  }

  function handleLogin(inputs) {
    auth
      .authorize(inputs)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setCurrentUser({
            name: inputs.name,
            email: inputs.email,
          });
          setIsLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        if (err.status === 401)
          setLoginError('Вы ввели неправильный логин или пароль.');
        else
          setLoginError('При авторизации произошла ошибка.');
      });
  }

  function handleLogout() {
    setCurrentUser({
      name: '',
      email: '',
    });
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        setUpdateMessage({
          success: true,
          message: 'Данные обновлены.',
        });
      })
      .catch((err) => {
        if (err.status === 409)
          err.json().then(res => {
            setUpdateMessage({
              success: false,
              message: res.message,
            });
          });
        else
          setUpdateMessage({
            success: false,
            message: 'При обновлении профиля произошла ошибка.',
          });
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} isMenuOpened={isMenuOpen} onMenuOpen={handleMenuOpen} onMenuClose={handleMenuClose} />
        <Routes>
          <Route path="/"
            element={<Main />}
          />

          <Route path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />

          <Route path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />

          <Route path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile onLogout={handleLogout} onUpdateUser={handleUpdateUser} updateMessage={updateMessage} />
              </ProtectedRoute>
            }
          />

          <Route path="/signup"
            element={<Register onRegister={handleRegister} registrationError={registrationError} />}
          />

          <Route path="/signin"
            element={<Login onLogin={handleLogin} loginError={loginError} />}
          />

          <Route path="/*"
            element={<NotFound />}
          />

        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider >
  );
};

export default App;
