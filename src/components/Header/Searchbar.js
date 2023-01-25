import React from "react";
import "./Header.css"

function SearchBar() { 
  return (
    <React.Fragment>
      <form id = "form">
        <div class = "searchBar">
          <input 
          class = "input is-info is-focused"
          type = "text" 
          id = "query" 
          name = "q"
          placeholder="Search your past trips"/>
          <button class = "button is-info is-outlined is-rounded has-background-info-light">
            Search
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default SearchBar;