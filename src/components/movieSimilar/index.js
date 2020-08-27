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
        <>
          <h4> Overview </h4> <p> {similar.overview} </p>{" "}
          <ul className="list-group list-group-horizontal">
          <li key="tit" className="list-group-item list-group-item-dark">
              Title{" "}
            </li>{" "}
            <li key="titl" className="list-group-item ">
              {" "}
              {similar.title}{" "}
            </li>{" "}
          </ul>
          <ul className="list-group list-group-horizontal">
            <li key="rdh" className="list-group-item list-group-item-dark">
              Release Date{" "}
            </li>{" "}
            <li key="rdv" className="list-group-item ">
              {" "}
              {similar.release_date}{" "}
            </li>{" "}
          </ul>
         
        </>
      );
    };
    


