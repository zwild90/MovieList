import React from 'react';
import { MovieCell } from './MovieCell';
import { Movie } from '../../types/Movie';

interface MovieListProps {
  movieList: Movie[];
}

export const MovieList = ({movieList}: MovieListProps) => {
  return (
    <div className='movie-list'>
      {movieList.map((x, i) => {
        return (
          <MovieCell key={i} movie={x} />
        );
      })}
    </div>
  );
}
