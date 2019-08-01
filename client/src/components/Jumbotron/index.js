import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h1>Google Book Search</h1>
      <p>Hi There!</p>
      <p>{props.savedOrSearch}</p>
    </div>
  );
}


export default Jumbotron;
