import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieList } from '../MovieList/MovieList';

interface MoviesWatchedProps {
  list: Movie[];
}

export const MoviesWatched = ({list}: MoviesWatchedProps) => {

  return (
    <div>
      <div className='movie-ribbon'>
        {/* temp */}
      </div>
      <MovieList movieList={list}/>
    </div>
  );
}