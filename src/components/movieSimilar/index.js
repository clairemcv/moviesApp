import React, { useEffect, useState } from "react";
import { getSimilar } from "../../api/tmdb-api";


export default ({ movie }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    getSimilar(movie.id).then((similar) => {
      setSimilar(similar);
     
});
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [],);

return (

  <table className="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Release Date</th>
      <th scope="col">Poster</th>
    </tr>
  </thead>
  <tbody>
    {similar.map(s => {
        return (
          <tr key={s.id}>
            <td>{s.title}</td>
            <td>{s.release_date}</td> 
            <td><img src={s.poster_path
      ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
      : "./film-poster-placeholder.png"
  }
  className="movie"
  alt={s.title}
/></td> 
            
          </tr>
        );
      })}
  </tbody>
</table>
);
};



