import React from "react";
import "./movieCredits.css";


export default ({ movie }) => {
  return (
    <>
      <h4> NEW Credits </h4> 
      <ul className="list-group list-group-horizontal">
        <li key="ct" className="list-group-item list-group-item-dark">
          Cast{" "}
        </li>{" "}
        {movie.cast.map((ct) => (
          <li key={ct.name} className="list-group-item">
            {" "}
            {ct.name}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      
      <ul className="list-group list-group-horizontal">
        <li key="c" className="list-group-item list-group-item-dark">
          Crew{" "}
        </li>{" "}
        {movie.crew.map((c) => (
          <li key={c.name} className="list-group-item">
            {" "}
            {c.name}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
  
    </>
  );
};

