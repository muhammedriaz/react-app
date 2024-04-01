import {getMovie} from "../../api/movies.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import moment from "moment";
import ImdbLogo from "../../assets/imdb.svg";
import {getMovieTime} from "../../utils/helpers.ts";

interface movieDetails {
  id: number;
  imdb_id: number;
  title: string;
  release_date: string;
  tagline: string;
  overview: string;
  runtime: number;
  poster_path: string;
  backdrop_path: string;
  genres: [{ id: number; name: string; }];
}

const defaultMovieDetail: movieDetails = {
  id: 0,
  imdb_id: 0,
  title: '',
  release_date: '',
  tagline: '',
  overview: '',
  runtime: 0,
  poster_path: '',
  backdrop_path: '',
  genres: [{
    id: 0,
    name: ''
  }]
}

export default function MovieDetails() {
  const {movieId} = useParams<{ movieId?: string | undefined }>();
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

  const movieBackdropUrl = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
  return (
    <>
      <div className="flex p-5 w-full relative">
        <div className="absolute left-0 right-0 bottom-0 top-0 brightness-[.2]" style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
        }}></div>
        <div className="w-1/3 relative">
          <img className="w-100 h-100"
               src={movieBackdropUrl} alt={movie.title}/>
        </div>
        <div className="flex flex-col gap-6 w-2/3 pl-5 text-white relative">
          <div>
            <h1
              className="text-3xl font-bold">{movie.title} ({moment(movie.release_date).format('YYYY').toString()})</h1>
            <h4
              className="text-lg text-gray-300">{moment(movie.release_date).format('LL').toString()} | {getMovieTime(movie.runtime)}</h4>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">
              <img className="h-6" src={ImdbLogo} alt="Imdb"/>
            </a>
            {movie.genres.map(genre => genre.name).join(' | ')}
          </div>
          <h3 className="text-xl italic py-4 text-gray-300">{movie.tagline}</h3>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Overview</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
