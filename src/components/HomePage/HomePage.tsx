import React from 'react';
import { MovieSearch } from '../MovieSearch/MovieSearch';
import { MovieListContext, ActionElementProps } from '../../context/MovieListContext';
import { useMovieList } from '../../hooks/MovieSearchHooks';
import { MoviesWatched } from '../MoviesWatched/MoviesWatched';
import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMenu,
  AiOutlineMore,
} from 'react-icons/ai';

export const HomePage = () => {
  const [movieList, addMovie, removeMovie, toggleWatch] = useMovieList();

  const addMovieElement = ({movie}: ActionElementProps): JSX.Element => {
    return (
      <button onClick={() => addMovie(movie)}>
        <AiOutlinePlus />
      </button>
    )
  }

  const toggleWatchElement = ({movie}: ActionElementProps): JSX.Element => {
    return (
      <div className='movie-cell-action'>
        <input type='checkbox' checked={movie.watched} onChange={() => toggleWatch(movie)} />
        <button onClick={() => removeMovie(movie)}>
          <AiOutlineDelete />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className='movie-container'>
        <MovieListContext.Provider value={{ActionElement: addMovieElement}}>
          <MovieSearch />
        </MovieListContext.Provider>
        
        <MovieListContext.Provider value={{ActionElement: toggleWatchElement}}>
          <MoviesWatched list={movieList} />
        </MovieListContext.Provider>
      </div>
    </div>
  )
}