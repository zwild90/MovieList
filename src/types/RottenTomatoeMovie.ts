export interface RottenTomatoeMovie {
  emsId: string;
  title: string;
  releaseYear: number;
  posterImageUrl: string;
  cast: Person[];
  castCrew: CastCrew;
  genres: string[];

  [key: string]: any;
}

interface Person {
  emsId: string;
  name: string;
  personId: string;
  role: string;
}

interface CastCrew {
  cast: string[];
  crew: Crew;
}

interface Crew {
  Producer: string[];
  Director: string[];
  Screenwriter: string[];
}
