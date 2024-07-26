import axios from "axios";
import { useEffect, useState } from "react";
const UseFetch = (url) =>{
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchPopularMovies = () => {
        const options = {
          method: "GET",
          url: url,
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
    return {data, err, loading};
}

export default UseFetch;