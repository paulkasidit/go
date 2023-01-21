import React from "react";
import "./Header.css"

function SearchBar() { 
  return (
    <React.Fragment>
      <div class = "columns">
        <div class = "column">
          <div class = "searchBar">
            <input type  = "text" placeholder = "Search past trips"></input>
          </div>
        </div>
        <div class = "column">
          <button class = "button is-info is-outlined is rounded has-background-white">
            Go
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchBar;