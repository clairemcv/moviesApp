import "./upcomingMovies.css";
import React, { useEffect, useState } from "react";
import { getUpcomingMovies} from "../../api/tmdb-api";


export default ({ movie }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies(movie.id).then((upcomingMovies) => {
      setUpcomingMovies(upcomingMovies);
     
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
    {upcomingMovies.map(u => {
        return (
          <tr key={u.id}>
            <td>{u.title}</td>
            <td>{u.release_date}</td>  
            <td>{u.overview}</td>   
            <td><img src={u.poster_path
      ? `https://image.tmdb.org/t/p/w500/${u.poster_path}`
      : "./film-poster-placeholder.png"
  }
  className="similar"
  alt={u.title}
/></td>  
          </tr>
        );
      })}
  </tbody>
</table>
);
};

