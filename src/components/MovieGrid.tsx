import type {movieDb} from "./MovieTile.tsx";
import MovieTile from "./MovieTile.tsx";

export default function MovieGrid({data}: { data: movieDb[] }) {
  return (
    <div className="grid grid-cols-6 gap-4">
      {data.length && (data.map((movie: movieDb) => (
        <MovieTile data={movie}/>
      )))}
    </div>
  );
}
