import "./nowplayingMovies.css";
import React, { useEffect, useState } from "react";
import { getNowplayingMovies} from "../../api/tmdb-api";


export default ({ movie }) => {
  const [nowplayingMovies, setNowplayingMovies] = useState([]);

  useEffect(() => {
    getNowplayingMovies(movie.id).then((nowplayingMovies) => {
      setNowplayingMovies(nowplayingMovies);
     
});
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [],);

return (

  <table className="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Release Date</th>
      <th scope="col">Overview</th>
      <th scope="img">Poster</th>
    </tr>
  </thead>
  <tbody>
    {nowplayingMovies.map(n => {
        return (
          <tr key={n.id}>
            <td>{n.title}</td>
            <td>{n.release_date}</td>  
            <td>{n.overview}</td>   
            <td><img src={n.poster_path
      ? `https://image.tmdb.org/t/p/w500/${n.poster_path}`
      : "./film-poster-placeholder.png"
  }
  className="similar"
  alt={n.title}
/></td>  
          </tr>
        );
      })}
  </tbody>
</table>
);
};