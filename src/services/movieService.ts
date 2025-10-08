import axios from "axios";

import type { Movie } from "../types/movie";

export interface MovieHttpResponse {
  results: Movie[];
}

export const fetchMovies = async (data: string): Promise<Movie[]> => {
  const response = await axios.get<MovieHttpResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${data}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );
  return response.data.results;
};
