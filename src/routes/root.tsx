import {useEffect, useState} from "react";
import {getUpcomingMovies} from "../api/movies.ts";
import type {movieDb} from "../components/MovieTile.tsx";
import MovieSearch from "../components/Search.tsx";
import Title from "../components/Title.tsx";
import MovieGrid from "../components/MovieGrid.tsx";


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
          <MovieSearch/>
          <Title name="Trending movies"/>
          <MovieGrid data={movies}/>
        </div>
      </div>
    </>
  );
}
