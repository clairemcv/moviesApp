import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import MovieCredits from "../components/movieCredits";
import useMovie from "../hooks/useMovie";

const upcomingMoviesPage = (props) => {
  const { id } = props.match.params;
  const [upcomingMovies] = useUpcomingMovies(id);
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={upcomingMovies}>
            <MovieDetails movie={upcomingMovies} />
            
          </PageTemplate>
          <div className="row">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/upcoming") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/upcoming`}
                >
                  Show Reviews (Extracts)
                </Link>
              ) : (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}`}
                >
                  Hide Reviews
                </Link>
              )}
            </div>
          </div>
          <Route
            path={`/movies/:id/upcoming`}
            render={(props) => <MovieCredits movie={movie} {...props} />}
          />
       
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(upcomingMoviesPage);