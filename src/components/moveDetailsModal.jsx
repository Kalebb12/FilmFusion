import { useContext } from "react";
import UseFetch from "../hooks/useFetch";
import { GlobalContext } from "../context/context";
import Skeleton from "react-loading-skeleton";

const MovieDetails = ({ closeModal }) => {
  const { id } = useContext(GlobalContext);
  const { data, err, loading } = UseFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`
  );
  return (
    <div
      onClick={() => {
        closeModal();
      }}
      className="modal-background fixed top-0 left-0 right-0 h-[100vh] bg-[--modal-background] flex justify-center items-center"
    >
      <div className="modal p-2 relative z-10 bg-[--primary-color]">
        {data.length > 0 ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${data[0].key}?${data[0].id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>):
          <Skeleton width={560} height={315} baseColor="var(--border-color)"/>
        }

        
      </div>
    </div>
  );
};

export default MovieDetails;
