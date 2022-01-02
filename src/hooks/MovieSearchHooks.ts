import { useState, useEffect } from 'react';
// import { getsuggestions } from '../api/ImdbApi';
import { getsuggestions, mapRTSuggestions } from '../api/RottenTomatoesApi';
import { Movie } from '../types/Movie';
import { Func, Func2 } from '../types/Types';
import { copy } from '../utils/copy'; 

const IDLE_TIME = 300;
const MOVIES_TO_WATCH_LIST = 'moviesToWatchList';
const MOVIE_NOT_FOUND = 'Movie not Found in List';

export const useMovieSearch = ():
  [string, Func<string, void>, Movie[]] => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [runningTimeout, setRunningTimeout] = useState(null);

  const fetchSuggestions = async (input: string) => {
    if (input !== '') {
      try {
        const results = await getsuggestions(input);
        const suggestionList = mapRTSuggestions(results);
        setSuggestions(suggestionList);
      } catch (err) {
        console.log(err);
      }
    } else {
      setSuggestions([]);
    }
  }

  useEffect(() => {
    const currentTimeout = setTimeout(() => {
      fetchSuggestions(input);
    }, IDLE_TIME);
    clearTimeout(runningTimeout);
    setRunningTimeout(currentTimeout);
    
  }, [input]);

  return [input, setInput, suggestions];
}

export const useMovieList = ():
  [Movie[], Func<Movie, void>, Func<Movie, void>, Func<Movie, void>] => {
  const result = localStorage.getItem(MOVIES_TO_WATCH_LIST);
  let list: Movie[] = [];
  if (result) {
    list = JSON.parse(result);
  }
  const [movieList, setMovieList] = useState<Movie[]>(list);

  const updateMovieList = (list: Movie[]) => {
    setMovieList(list);
    localStorage.setItem(MOVIES_TO_WATCH_LIST, JSON.stringify(list));
  }

  const findMovie = (movie: Movie, movieList: Movie[], callback: Func2<number, Movie[], void>): void => {
    const index = movieList.findIndex(x => {
      return x.title === movie.title;
    });
  
    if (index > 0) {
      callback(index, movieList);
    }
    else {
      console.error(MOVIE_NOT_FOUND);
    }
  }

  const addMovie = (movie: Movie) => {
    const copyList: Movie[] = copy(movieList);
    const updatedMovie: Movie = {
      ...movie,
      dateAdded: new Date().getTime(),
    }
    copyList.push(updatedMovie);
    updateMovieList(copyList);
  }

  const removeMovie = (movie: Movie) => {
    findMovie(movie, movieList, (index, list) => {
      const copyList = copy(list);
      copyList.splice(index, 1);
      updateMovieList(copyList);
    });
  }
  
  const toggleWatch = (movie: Movie) => {
    findMovie(movie, movieList, (index, list) => {
      const copyList = copy(list);
      const watched: boolean = copyList[index]?.watched || false;
      copyList[index].watched = !watched;
      updateMovieList(copyList);
    });
  }

  return [movieList, addMovie, removeMovie, toggleWatch];
}