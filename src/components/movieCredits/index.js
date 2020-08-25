import "./movieCredits.css";
import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";


export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
      setCredits(credits);
      console.log("credits: ", credits);
});
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  return (
    <table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">Cast</th>
        <th scope="col">Character</th>
      </tr>
    </thead>
    <tbody>
      {credits.cast.map((cast) => {
        return (
          <tr key={cast.name}>
            <td>{cast.name}</td>
            <td>{cast.character}</td>
          </tr>
        );
      })}

      
    </tbody>
  </table>
  );
  };
  


