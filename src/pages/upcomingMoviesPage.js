import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import UpcomingMovies from "../components/upcomingMovies";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";


const UpcomingMoviesPage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <UpcomingMovies movie={movie} />
            
          </PageTemplate>
          <div className="row">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/upcoming") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/upcoming`}
                >
                  Show Reviews (Extracts)
                </Link>
              ) : (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/upcoming`}
                >
                  Hide Reviews
                </Link>
              )}
            </div>
          </div>
          <Route
            path={`/movies/upcoming`}
            render={(props) => <UpcomingMovies movie={movie} {...props} />}
          />
         
     </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(UpcomingMoviesPage);