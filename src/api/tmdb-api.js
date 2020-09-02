export const getMovies = () => {
  return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
    .then((res) => res.json())
    .then((json) => json.results);
    
};


export const getMovie = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((res) => res.json());
};

export const getGenres = () => {
  return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
    )
    .then((res) => res.json())
    .then((json) => json.genres);
};

export const getMovieReviews = (id) => {
  return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then((res) => res.json())
    .then((json) => json.results);
};


export const getCast = async (id) => {
  const fetchResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const res = await fetchResponse.json();
  const json = res.cast;
  return json;
};


export const getSimilar = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then((res) => res.json())
    .then((json) => json.results);
};




export const getUpcomingMovies = async (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((res) => res.json())
  .then((json) => json.results);
};

export const getTopratedMovies = async (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((res) => res.json())
  .then((json) => json.results);
};
