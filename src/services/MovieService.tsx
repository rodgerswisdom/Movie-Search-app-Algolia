import axios from 'axios';

// const API_URL = process.env.TMDB_API_URL as string;
// const API_KEY = process.env.TMDB_API_KEY as string;

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '79926c8fd020e643f725303b713c5688';

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
