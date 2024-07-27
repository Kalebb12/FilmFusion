import MovieTemplate from "../components/movieTemplate";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CardSkeleton from "../components/skeleton";
import UseFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import MovieDetails from "../components/movieDetailsModal";
import { GlobalContext } from "../context/context";
import { AnimatePresence } from "framer-motion";
const Popular = () => {
  const { data, err, loading } = UseFetch(
    "https://api.themoviedb.org/3/discover/movie"
  );
  const [movieDetails, setMovieDetails] = useState(false);
  const { setId } = useContext(GlobalContext);
  const showDetails = (id) => {
    setMovieDetails(true);
    setId(id);
  };

  const prevScroll = () => {
    const preview = document.querySelector(".movie-prev");
    preview.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const forwardScroll = () => {
    const preview = document.querySelector(".movie-prev");
    preview.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const closeModal = () => {
    setMovieDetails(false);
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
        {err && <p>Error: {err.message}</p>}
        <div className=" relative">
          <div
            className="border absolute top-[30%] right-[98%] p-2 z-10"
            onClick={prevScroll}
          >
            <MdOutlineArrowBackIos
              size={40}
              className="hover:text-orange-300 transition"
            />
          </div>
          <div className="flex gap-3 w-full overflow-x-scroll movie-prev ">
            {loading &&
              Array(20)
                .fill(null)
                .map((_, i) => <CardSkeleton key={i} />)}
            {data.length > 0 &&
              data.map((movie, i) => {
                return (
                  <MovieTemplate
                    movie={movie}
                    index={i + 1}
                    key={i}
                    showDetails={showDetails}
                  />
                );
              })}
          </div>
          <div className="p-10">
            <div
              className="border absolute top-[30%] left-[98%] p-2 z-10"
              onClick={forwardScroll}
            >
              <MdOutlineArrowForwardIos
                size={40}
                className="hover:text-orange-300 transition"
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {movieDetails && <MovieDetails closeModal={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default Popular;
