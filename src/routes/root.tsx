import {useEffect, useState} from "react";
import {getUpcomingMovies} from "../api/movies.ts";
import MovieTile from "../components/MovieTile.tsx";
import type {movieDb} from "../components/MovieTile.tsx";


export default function Root() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUpcomingMovies()
                setMovies(data.results);

            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold">Movies</h1>
            <div className="p-3 grid grid-rows-4 grid-flow-col gap-4">
                    {movies.length && (movies.map((movie: movieDb) => (
                        <MovieTile data={movie} />
                    )))}
            </div>
        </>
    );
}