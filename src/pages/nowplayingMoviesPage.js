import React from "react";
import { withRouter } from "react-router-dom";
import NowplayingMovies from "../components/nowplayingMovies";
import useMovie from "../hooks/useMovie";


const NowplayingMoviesPage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  return (
    <>
      {movie ? (
        <>
            <NowplayingMovies movie={movie} />

     </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(NowplayingMoviesPage);