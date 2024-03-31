import {getMovie} from "../../api/movies.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

interface movieDetails {
    id: number;
    title: string;
}

const defaultMovieDetail: movieDetails = {
    id : 0,
    title: ''
}

export default function MovieDetails() {
    const {movieId} = useParams<{movieId?: string | undefined}>();
    const [movie, setMovie] = useState(defaultMovieDetail);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await getMovie(movieId)
                setMovie(results);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [movieId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <div className="p-3 grid grid-rows-4 grid-flow-col gap-4">
                {}
            </div>
        </>
    );
}