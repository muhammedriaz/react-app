import { useState, useEffect } from 'react';
import {getData} from "../api/movies.ts";
import {movieDb} from "./MovieTile.tsx";
import {Link} from "react-router-dom";

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

    const handleChange = (event: any) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for a movie..."
            />
            {loading && <p>Loading...</p>}
            <div className="flex flex-col">
                {movies.map((movie: movieDb) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`} className="text-white">{movie.title}</Link>
                ))}
            </div>
        </div>
    );
}