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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmM1N2JjZGYyZDc1YjQ5NWZjMzY0NDBkMWQ5MjViYiIsIm5iZiI6MTc1OTc4ODQwNy41MDg5OTk4LCJzdWIiOiI2OGU0M2Q3NzEwMzk1NWFhOTlmODFlMWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.N0xpVmjv0Je_mKy7EYme5rYjxUb-Hqy1jbk8QQD7b_w
`,
      },
    }
  );
  return response.data.results;
};
