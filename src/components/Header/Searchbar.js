import React from "react";
import "./Header.css"

function SearchBar() { 
  return (
    <React.Fragment>
      <form id = "form">
        <div class = "searchBar">
          <input type = "search" 
          id = "query" 
          name = "q"
          placeholder="Search your past trips"/>
          <button class = "button is-white">
            Search
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default SearchBar;