import React from 'react';
import { MovieList } from '../MovieList/MovieList';
import { useMovieSearch } from '../../hooks/MovieSearchHooks';
// import { AiOutlineSearch } from 'react-icons/ai';
import '../../styles/MovieSearch.scss';

export const MovieSearch = () => {
  const [input, setInput, suggestions] = useMovieSearch();

  return (
    <div>
      <div className='movie-ribbon'>
        <input
          className='search-input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus={true}
        />
      </div>
      <MovieList movieList={suggestions} />
    </div>
  );
} 