import "./topratedMovies.css";
import React, { useEffect, useState } from "react";
import { getTopratedMovies} from "../../api/tmdb-api";


export default ({ movie }) => {
  const [topratedMovies, setTopratedMovies] = useState([]);

  useEffect(() => {
    getTopratedMovies(movie.id).then((topratedMovies) => {
      setTopratedMovies(topratedMovies);
     
});
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [],);

return (

  <table className="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Votes</th>
      <th scope="col">Overview</th>
      <th scope="img">Poster</th>
    </tr>
  </thead>
  <tbody>
    {topratedMovies.map(t => {
        return (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>{t.vote_average}</td>  
            <td>{t.overview}</td>   
            <td><img src={t.poster_path
      ? `https://image.tmdb.org/t/p/w500/${t.poster_path}`
      : "./film-poster-placeholder.png"
  }
  className="similar"
  alt={t.title}
/></td>  
          </tr>
        );
      })}
  </tbody>
</table>
);
};