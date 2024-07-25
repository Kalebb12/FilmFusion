import axios from "axios";
import { useEffect, useState } from "react";
import MovieTemplate from "../components/movieTemplate";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
const Popular = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPopularMovies = () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
          include_adult: "true",
          include_video: "true",
          language: "en-US",
          page: "1",
          sort_by: "popularity.desc",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS}`,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data.results);
        })
        .catch(function (error) {
          setErr(error);
        })
        .finally(function () {
          setLoading(false);
        });
    };
    fetchPopularMovies();
  }, []);
  const prevScroll = () => {
    const preview = document.querySelector(".movie-prev")
    preview.scrollBy({
        left: -1000,
        behavior: 'smooth'
    });
  };

  const forwardScroll = () => {
    const preview = document.querySelector(".movie-prev")
    preview.scrollBy({
        left: 1000,
        behavior: 'smooth'
    });
  };

  return (
    <div className="p-10">
      <div className="flex items-center">
        <div className="md:w-2 w-1 h-8 md:h-10 rounded-xl bg-yellow-400"></div>
        <h1 className="rounded-l-md font-bold sm:text-[20px] md:text-[28px] pl-3">
          Top 20 on FilmFusion This Week
        </h1>
      </div>
      <div className="movies mt-3">
        {loading && <p>Loading....</p>}
        {err && <p>Error: {err.message}</p>}
        <div className=" relative">
          <div className="border absolute top-[30%] right-[98%] p-2" onClick={prevScroll}>
            <MdOutlineArrowBackIos
              size={40}
              className="hover:text-orange-300 transition"
              
            />
          </div>
          <div className="flex gap-3 w-full overflow-x-scroll movie-prev">
            {data.length > 0 &&
              data.map((movie, i) => {
                return <MovieTemplate movie={movie} index={i + 1} key={i} />;
              })}
          </div>
          <div className="p-10">
          <div className="border absolute top-[30%] left-[98%] p-2" onClick={forwardScroll}>
            <MdOutlineArrowForwardIos
              size={40}
              className="hover:text-orange-300 transition"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
