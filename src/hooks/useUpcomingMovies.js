import {
  useEffect,
  useState
} from "react";
import {
  getUpcomingMovies
} from "../api/tmdb-api";

const useUpcomingMovies= (id) => {
  const [movie, setUpcomingMovies] = useState(null);
  useEffect(() => {
    getUpcomingMovies(id).then((movie) => {
        setUpcomingMovies(movie);
    });
  }, [id]);
  return [movie, setUpcomingMovies];
};

export default useUpcomingMovies;

