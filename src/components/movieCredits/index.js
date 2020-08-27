import React, { useEffect, useState } from "react";
import { getCast } from "../../api/tmdb-api";


export default ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movie.id).then((cast) => {
      setCast(cast);
     
});
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [],);


  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Character</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(c => {
            return (
              <tr key={c.cast_id}>
                <td>{c.character}</td> 
                <td>{c.name}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );


};

