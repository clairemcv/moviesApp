import React from "react";
import PageTemplate from "../components/templateMoviePage";
import upcomingMovies from "../components/upcomingMovies";


const upcomingMovies = (props) => {
  return (
    <PageTemplate movie={props.location.state.movie}>
      <upcomingMovies review={props.location.state.upcoming} />
  
    </PageTemplate>
  );
};

export default upcomingMoviesPage;