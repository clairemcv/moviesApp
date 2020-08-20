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
  <>
  <h4> NEW Credits </h4> 
  <ul className="list-group list-group-horizontal">
        <li key="ct" className="list-group-item list-group-item-dark">
          Cast{" "}
        </li>{" "}
        {credits.cast.map((ct) => (
          <li key={ct.character} className="list-group-item">
            {" "}
            {ct.character}{" "}
          </li>
        ))}{" "}
      </ul>{" "}

 
</>
)};

