import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import MovieCredits from "../components/movieCredits";

const MovieReviewPage = (props) => {
  return (
    <PageTemplate movie={props.location.state.movie}>
      <MovieReview review={props.location.state.review} />
      <MovieCredits review={props.location.state.credits} />
    </PageTemplate>
  );
};

export default MovieReviewPage;
