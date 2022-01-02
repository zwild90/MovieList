import { createContext } from 'react';
import { Movie } from '../types/Movie';

interface ContextProps {
  ActionElement: any;
}

export interface ActionElementProps {
  movie: Movie;
}

export const MovieListContext = createContext<ContextProps>(null);