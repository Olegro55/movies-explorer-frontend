import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';

import "./App.css";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Олег',
    email: 'pochta@yandex.ru',
  });

  function handleMenuOpen() { setMenuOpen(true) }
  function handleMenuClose() { setMenuOpen(false) }

  //----------заглушка----------
  function handleLogin() {
    setIsLoggedIn(true);
    navigate('/profile');
  }
  function handleLogout() {
    setIsLoggedIn(false);
    navigate('/signin');
  }
  function handleUpdateUser(userData) {
    setCurrentUser(userData);
  }
  //----------------------------

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} isMenuOpened={isMenuOpen} onMenuOpen={handleMenuOpen} onMenuClose={handleMenuClose} />
        <Routes>
          <Route path="/"
            element={<Main />}
          />

          <Route path="/movies"
            element={<Movies />}
          />

          <Route path="/saved-movies"
            element={<SavedMovies />}
          />

          <Route path="/profile"
            element={<Profile onLogout={handleLogout} onUpdateUser={handleUpdateUser} />}
          />

          <Route path="/signup"
            element={<Register />}
          />

          <Route path="/signin"
            element={<Login onLogin={handleLogin} />}
          />

          <Route path="/*"
            element={<NotFound />}
          />

        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
