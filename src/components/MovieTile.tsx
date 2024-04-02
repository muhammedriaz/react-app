import {Link} from "react-router-dom";
import moment from "moment";

export interface movieDb {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function MovieTile({data}: { data: movieDb }) {
  const moviePosterUrl = `https://media.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`;
  return (
    <Link to={`movie/${data.id}`} className="flex flex-col" key={data.id}>
      <div className="h-56 w-36">
        <img className="h-full w-full"
             src={moviePosterUrl}
             alt={data.title}/>
      </div>
      <h3 className="text-sm text-white pt-2">{data.title}</h3>
      <h4 className="text-xs text-gray-300">{moment(data.release_date).format('LL').toString()}</h4>
    </Link>
  )
}
