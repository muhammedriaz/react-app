import {useEffect, useState} from "react";
import {getUpcomingMovies} from "../api/movies.ts";
import MovieTile from "../components/MovieTile.tsx";
import type {movieDb} from "../components/MovieTile.tsx";


export default function Root() {

    const [movies, setMovies] = useState<movieDb[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
    }, [movies]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-6xl">
                    <h1 className="text-3xl font-bold text-white pb-2">Movies</h1>
                    <div className="grid grid-cols-6 gap-4">
                        {movies.length && (movies.map((movie: movieDb) => (
                            <MovieTile data={movie}/>
                        )))}
                    </div>
                </div>
            </div>
        </>
    );
}