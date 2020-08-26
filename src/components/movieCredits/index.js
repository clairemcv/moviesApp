import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

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
          <th scope="col">Actor</th>
          <th scope="col">Character</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {credits.cast.map(c => {
            return (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{excerpt(c.character)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/credits/${c.id}`,
                      state: {
                        credits: c,
                        movie: movie
                      }
                    }}
                  >
                    Full 
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};