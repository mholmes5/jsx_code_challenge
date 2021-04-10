//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.

ReactDOM.render(
  <h1>Hello Sly and Hershey</h1>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).

//It should contain 3 list elements.
const list = "<ul><li>Feed Me</li><li>Nap Time</li><li>No Baths</li></ul>";

ReactDOM.render(
  <div>
    <h1>Hello Sly and Hershey</h1>
    <ul>
      <li>Feed Me</li>
      <li>Nap Time</li>
      <li>No Baths</li>
    </ul>
  </div>,
  document.getElementById("root")
);