import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { MainApi } from '../../utils/MainApi';

const baseUrl = 'https://api.nomoreparties.co';

function Movies({ onError }) {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const SearchHistory = localStorage.getItem('SearchHistory');
    if (SearchHistory) {
      checkSaved(JSON.parse(SearchHistory));
    }
  }, [])

  function saveResults(data) {
    localStorage.removeItem('SearchHistory')
    localStorage.setItem('SearchHistory', JSON.stringify(data));
  }

  function findInName(name, request) {
    if (!name || !request) return 0;

    name = name.toLowerCase();
    request = request.toLowerCase();
    name = name.trim();
    request = request.trim();

    return name.indexOf(request) !== -1
  }

  function checkSaved(films) {
    MainApi.getMovies()
      .then((savedMovies) => {
        const data = films.map((item) => {
          const movie = savedMovies.find(({ movieId, _id }) => movieId === item.id);
          if (movie) {
            item.isSaved = true;
            item.savedId = movie._id;
          } else item.isSaved = false;
          return item;
        });
        setResults(data);
        saveResults(data);
      })
      .catch((err) => err.then(({ message }) => onError(message)))
  }

  async function handleSearch(params) {
    setIsLoading(true);
    setResults(null);

    let films
    try {
      films = await MoviesApi.getMovies();
    } catch({ message }) {
      onError(message);
      setIsLoading(false);
    }

    const { request, isShort } = params;

    const data = films.filter(({ duration, nameRU, nameEN }) => {

      if (isShort && duration > 40) return false;

      if (findInName(nameRU, request)) return true;
      if (findInName(nameEN, request)) return true;

      return false;
    });

    checkSaved(data);
    setIsLoading(false);
  }

  function addMovie(data) {
    const { country, director, duration, year, description, image: { url }, trailerLink, id: movieId, nameRU, nameEN } = data;
    MainApi.addMovie({ country, director, duration, year, description, image: `${baseUrl}${url}`, trailerLink, movieId, nameRU, nameEN })
      .then((movie) => {
        if (movie) {
          checkSaved(results)
        }
      })
      .catch((err) => err.then(({ message }) => onError(message)))
  }

  function deleteMovie(id) {
    MainApi.deleteMovie(id)
      .then((movie) => {
        if (movie) {
          checkSaved(results)
        }
      })
      .catch((err) => err.then(({ message }) => onError(message)))
  }

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading ? (<Preloader />) : null}
      {results && !isLoading ? (<MoviesCardList cards={results} onDelete={deleteMovie} onAdd={addMovie} />) : null}
    </>
  );
}

export default Movies;
