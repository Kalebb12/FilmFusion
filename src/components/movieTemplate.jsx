import { BiStar } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const MovieTemplate = ({ movie ,index}) => {
  const {title , poster_path , popularity} = movie
  return (
    <div className="min-w-64 bg-[--hover-color]">
      <img
        draggable="false"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="w-full object-cover"
        alt="img - poster"
      />
      <div className="p-3">
        <div className="flex items-center gap-6">
          <div className="flex gap-1 items-center">
            <FaStar fill="gold" />
            <span>{movie.popularity}</span>
          </div>
          <div className="px-4 py-2 rounded-sm hover:bg-[--secondary-color] cursor-pointer">
            <BiStar fill="rgb(59 130 246)"/>
          </div>
        </div>

        <div className="h-14 w-full overflow-hidden text-ellipsis">
            <span className="hover:underline">{index}. <a href="#" className=" leading-snug">{movie.title}</a></span>
        </div>

        <div className="flex flex-col gap-1">
            <button className="w-full px-5 py-2 rounded-lg bg-[--border-color] hover:bg-[--secondary-color] text-blue-500">+ WatchList</button>
            <button className="flex items-center px-5 py-2 gap-3 w-full justify-center rounded-lg hover:bg-[--secondary-color]"><FaPlay /> Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default MovieTemplate;
