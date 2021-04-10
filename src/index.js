//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.

//It should display an unordered list (bullet points).

//It should contain 3 list elements.
const list = "<ul><li>Feed Me</li><li>Nap Time</li><li>No Baths</li></ul>";

ReactDOM.render(
  <div>
    <h1>My College Baseball Top 3</h1>
    <ol>
      <li>Arkansas</li>
      <li>Vanderbilt</li>
      <li>Mississippi State</li>
    </ol>
  </div>,
  document.getElementById("root")
);
