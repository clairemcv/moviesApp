import React from "react";
import { withRouter } from "react-router-dom";
import UpcomingMovies from "../components/upcomingMovies";
import useMovie from "../hooks/useMovie";


const UpcomingMoviesPage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  return (
    <>
      {movie ? (
        <>
            <UpcomingMovies movie={movie} />

     </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(UpcomingMoviesPage);