import "./upcomingMovies.css";
import React, { useEffect, useState } from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getUpcomingMovies } from "../../api/tmdb-api";


const upcomingMovies = props => {
  const { id } = props.match.params;
  const [movie, setUpcomingMovies] = useState(null);
  useEffect(() => {
    getUpcomingMovies(id).then(movie => {
      setUpcomingMovies(movie);
    });
  }, [id]);
  return (
    <>
      {movie ? (
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default upcomingMovies;
