import AddMovieReviewPage from "./pages/addMovieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopratedMoviesPage from "./pages/topratedMoviesPage";
import NowplayingMoviesPage from "./pages/nowplayingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <Switch>
                <Route
                  exact
                  path="/reviews/form"
                  component={AddMovieReviewPage}
                />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route
                  exact
                  path="/movies/favorites"
                  component={FavoriteMoviesPage}
                />
                <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
                <Route
                  exact
                  path="/movies/upcoming"
                  component={UpcomingMoviesPage}
                />
                <Route path="/movies/top_rated" component={TopratedMoviesPage} />
                <Route
                  exact
                  path="/movies/top_rated"
                  component={TopratedMoviesPage}
                />
                <Route path="/movies/now_playing" component={NowplayingMoviesPage} />
                <Route
                  exact
                  path="/movies/now_playing"
                  component={NowplayingMoviesPage}
                />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
