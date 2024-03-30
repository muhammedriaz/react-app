import {Link} from "react-router-dom";

export interface movieDb {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

export default function MovieTile({data}: {data: movieDb}) {
    return (
        <Link to={`movie/${data.id}`} className="flex flex-col w-full" key={data.id}>
            <img className="h-48" src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`}
                 alt={data.title}/>
            <h3 className="text-sm">{data.title}</h3>
            <h4 className="text-xs text-gray-500">{data.release_date}</h4>
        </Link>
    )
}