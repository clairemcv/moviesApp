import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieCredits from "../src/components/movieCredits";
import MovieSimilar from "../src/components/movieSimilar";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import UpcomingMovies from "../src/components/upcomingMovies";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const credits = {
  id: 181808,
  cast: [
    {
      cast_id: 14,
      character: "Luke Skywalker / Dobbu Scay (voice)",
      credit_id: "5679cdd4c3a3685bbf000206",
      gender: 2,
      id: 2,
      name: "Mark Hamill",
      order: 0,
      profile_path: "/fk8OfdReNltKZqOk2TZgkofCUFq.jpg"
      },
    {
        cast_id: 15,
        character: "General Leia Organa",
        credit_id: "567aa394c3a3685bdf00266a",
        gender: 1,
        id: 4,
        name: "Carrie Fisher",
        order: 1,
        profile_path: "/rfJtncHewKVnHjqpIZvjn24ESeC.jpg"
        },
      {
          cast_id: 13,
          character: "Kylo Ren / Ben Solo",
          credit_id: "5679cdbd92514106f50001e9",
          gender: 2,
          id: 1023139,
          name: "Adam Driver",
          order: 2,
          profile_path: "/fsbGQ1eZFgdsG1XnKlhNSvHsiGo.jpg"
          },
        {
          cast_id: 11,
          character: "Rey",
          credit_id: "562fdd999251413b460008ad",
          gender: 1,
          id: 1315036,
          name: "Daisy Ridley",
          order: 3,
          profile_path: "/n8kBnNOi9VmELHJy3FdZjrSN9zT.jpg"
          },
  ],
  crew: [
    {
      credit_id: "52fe4c709251416c7511a87b",
      department: "Writing",
      gender: 2,
      id: 1,
      job: "Characters",
      name: "George Lucas",
      profile_path: "/d0ZMdgMz1mVcWWctyF7sbymSlv4.jpg"
      },
      {
      credit_id: "5a398f5dc3a36814ae07f732",
      department: "Crew",
      gender: 1,
      id: 4,
      job: "In Memory Of",
      name: "Carrie Fisher",
      profile_path: "/rfJtncHewKVnHjqpIZvjn24ESeC.jpg"
      },
      {
      credit_id: "575bcbb1925141649b000fbb",
      department: "Sound",
      gender: 2,
      id: 491,
      job: "Original Music Composer",
      name: "John Williams",
      profile_path: "/KFyMqUWeiBdP9tJcZyGWOqnrgK.jpg"
      },
      {
      credit_id: "567d4a9dc3a36860e900466f",
      department: "Art",
      gender: 2,
      id: 1226,
      job: "Production Design",
      name: "Rick Heinrichs",
      profile_path: "/hKTFePEYqeVYHQWOgbHS4RSoB0q.jpg"
      },
  ],
};

const similar = {
    id: 1891,
    video: false,
    vote_count: 11917,
    vote_average: 8.4,
    title: "The Empire Strikes Back",
    release_date: "1980-05-20",
    original_language: "en",
    original_title: "The Empire Strikes Back",
    genre_ids: [
       28,
       12,
       878
      ],
    backdrop_path: "/azIbQpeKKNF9r85lBSRrNnMK0Si.jpg",
    adult: false,
    overview: "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
    poster_path: "/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
    popularity: 33.751
    };

    const upcoming = {
      popularity: 275.087,
      vote_count: 187,
      video: false,
      poster_path: "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      id: 577922,
      adult: false,
      backdrop_path: "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
      original_language: "en",
      original_title: "Tenet",
      genre_ids: [
      28,
      53
      ],
      title: "Tenet",
      vote_average: 7.7,
      overview: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      release_date: "2020-08-22"
      };

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={40} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];

    return (
      <MovieList
        movies={movies}
        credits={credits}
        similar={similar}
        upcoming={upcoming}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieCredits", module).add("default", () => (
  <MovieCredits movie={sample} />
));

storiesOf("Movie Details Page/MovieSimilar", module).add("default", () => (
  <MovieSimilar movie={sample} />
));

storiesOf("Movie Details Page/UpcomingMovies", module).add("default", () => (
  <UpcomingMovies movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);