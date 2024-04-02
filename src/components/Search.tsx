import {ChangeEvent, useEffect, useState} from 'react';
import {getData} from "../api/movies.ts";
import type {movieDb} from "./MovieTile.tsx";
import {Link} from "react-router-dom";
import moment from "moment";
import CenterText from "./CenterText.tsx";

export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await getData(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
        setMovies(response.results);
      } finally {
        setLoading(false);
      }
    };
    if (query.trim() !== '') {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [query]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center py-3 relative">
      <input
        className="bg-gray-600 p-2 rounded-md text-gray-200 focus:outline-0 focus:ring-2 focus:ring-gray-400"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      {loading && <CenterText text="Loading..."/>}
      {movies.length && (
        <div className="flex flex-col absolute top-11 bg-gray-600 p-2 rounded-md shadow-md">
          {movies.map((movie: movieDb) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}
                  className="text-gray-300 hover:text-whitep px-2 py-1">{movie.title} ({moment(movie.release_date).format('YYYY').toString()})</Link>
          ))}
        </div>
      )
      }
    </div>
  );
}
