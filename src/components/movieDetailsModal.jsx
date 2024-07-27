import axios from "axios";
import { useContext, useState } from "react";
import UseFetch from "../hooks/useFetch";
import { GlobalContext } from "../context/context";
import Skeleton from "react-loading-skeleton";

const MovieDetails = ({ closeModal }) => {
  const { id } = useContext(GlobalContext);
  const [movieDetails, setMovieDetails] = useState([]);
  const { data, err, loading } = UseFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`
  );

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGZiMzM4OTY0NWRlNzYzZmQyZDIyNzY3Zjc4NTAxMCIsIm5iZiI6MTcyMTU4MTUzMy4wODA2MDksInN1YiI6IjY2OWQzYzk0NjU4Y2EwNWViYzZjODg1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPk7bmgKQWPqOn7s4I_Uls2MCMshzUv3WcmLs91-tAk",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      setMovieDetails(response.data);
      //   console.log(movieDetails);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div
      onClick={() => {
        closeModal();
      }}
      className="fixed top-0 left-0 right-0 h-[100vh] bg-[--modal-background] flex justify-center items-center"
    >
      <div className="max-w-[570px] p-2 relative z-10 bg-[--primary-color]">
        <div className="mb-2">
          {movieDetails.original_title ? (
            <h1 className="text-2xl font-bold text-[--border-color]">
              {movieDetails.original_title}
            </h1>
          ) : (
            <Skeleton width={400} height={50} baseColor="var(--border-color)" />
          )}
        </div>
        {(data[0] &&  data[0].id ) != undefined ? (
          <iframe
            width="100%"
            height="315" 
            className="bg-black"
            src={`https://www.youtube.com/embed/${data[0].key}?${data[0].id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <Skeleton width={560} height={315} baseColor="var(--border-color)" />
        )}

        {movieDetails.genres ? (
          <div className="py-2 flex gap-2">
            {movieDetails.genres.map((genre, i) => {
              return (
                <p
                  key={i}
                  className="cursor-pointer transition-all hover:bg-[--background-color] hover:text-[--text-color] text-[--background-color] px-3 py-2 rounded-lg border border-[--background-color]"
                >
                  {genre.name}
                </p>
              );
            })}
          </div>
        ) : (
          <Skeleton
            count={3}
            baseColor="var(--border-color)"
            containerClassName="py-2 flex gap-2"
            className="w-32 px-4 py-3"
          />
        )}
      <div>
        {
            movieDetails.overview ?
            <div className="text-[--border-color] text-sm">
              {movieDetails.overview}
            </div>
            :
            <Skeleton width="100%" height={300} baseColor="var(--border-color)" />
        }
      </div>

      <div className="text-[--border-color] text-sm mt-2" id="noware">
        visit  {movieDetails ? <a target="_blank" href={movieDetails.homepage} className=" hover:underline text-blue-500">HomePage</a> :   <a href="#noware">HomePage</a>}
      </div>
      </div>
    </div>
  );
};

export default MovieDetails;
