import axios from 'axios';

// const API_URL = process.env.TMDB_API_URL as string;
// const API_KEY = process.env.TMDB_API_KEY as string;

const API_URL = process.env.TMBD_API_URL as string;
const API_KEY = process.env.TMBD_API_KEY as String;

export const fetchMovies = async (query: string) => {
  const response = await axios.get(`${API_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
