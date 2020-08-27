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
          <th scope="col">Character</th>
        </tr>
      </thead>
      <tbody>
        {similar.map(s => {
            return (
              <tr key={s.title}>
                <td>{s.title}</td>
                <td>{s.release_date}</td> 
                
              </tr>
            );
          })}
      </tbody>
    </table>
  );
        };
  