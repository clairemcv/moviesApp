
import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = (props) => {
  const context = useContext(MoviesContext);

  return (
    <PageTemplate
      title="All Movies"
      movies={context.movies}
     
    />
  );
};

export default UpcomingMoviesPage;