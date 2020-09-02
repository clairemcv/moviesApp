import React from "react";
import { withRouter } from "react-router-dom";
import TopratedMovies from "../components/topratedMovies";
import useMovie from "../hooks/useMovie";


const TopratedMoviesPage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  return (
    <>
      {movie ? (
        <>
            <TopratedMovies movie={movie} />

     </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(TopratedMoviesPage);