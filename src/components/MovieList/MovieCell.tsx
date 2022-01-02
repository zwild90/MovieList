import React, { useContext } from 'react';
import { Movie } from '../../types/Movie';
import { MovieListContext } from '../../context/MovieListContext';

interface MovieCellProps {
  movie: Movie;
}

export const MovieCell = ({movie}: MovieCellProps) => {
  const { ActionElement } = useContext(MovieListContext);

  const getLabel = () => {
    const yearLabel = movie.year ? `(${movie.year})` : '';
    const label = `${movie.title} ${yearLabel}`;
    return (
      <p className='movie-name' title={label}>{label}</p>
    );
  }

  const getDescription = () => {
    if (movie.directors === undefined || movie.cast === undefined) {
      return null;
    }
    const list: string[] = [...movie.directors, ...movie.cast]; 
    const castCrew = list.join(', ');
    return (
      <p className='movie-description' title={castCrew}>{castCrew}</p>
    );
  }
  
  return (
    <div className='movie-cell'>
      <img src={movie?.posterUrl} alt='' />
      <div className='movie-labels'>
        {getLabel()}
        {getDescription()}
      </div>
      
      <ActionElement movie={movie}/>
    </div>
  );
}