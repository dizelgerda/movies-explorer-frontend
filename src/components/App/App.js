import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="root">

      <Routes>
        <Route path="/" element={
          <>
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header loggedIn={loggedIn} />
            <Profile />
          </>
        } />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
