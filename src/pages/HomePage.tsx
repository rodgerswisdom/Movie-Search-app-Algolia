import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/MovieService';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      const results = await fetchMovies('popular');
      setMovies(results);
    };

    fetchInitialMovies();
  }, []);

  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
