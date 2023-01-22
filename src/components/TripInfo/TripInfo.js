import React from "react";
import "./TripInfo.css";  

function TripInfo() { 
  return (
    <React.Fragment>
      <div class = "tripInfoContainer">
        <div class = "box has-background-warning-light">

          <div class="card has-background-link-light">
            <header class="card-header has-background-white">
              <p class="card-header-title">
              <h4 class="title is-4">Details of your trip</h4>
              </p>
              <button class="card-header-icon" aria-label="more options">
              </button>
            </header>

            <div class = "card-content">
              <div class =  "content">
                <div class = "box">
                  <h2 class = "subtitle">Day 1</h2>
                  <p>Vina Robles winery</p>
                </div>
                <div class = "box">
                <h2 class = "subtitle">Day 2</h2>
                  <p>Sensorio Field of Lights</p>
                  <p>Check out of your accomodation and head back to Los Angeles</p>
                </div>
              </div>
            </div> 
          </div>

          <footer class = "card-footer">
            <a href = "#" class = "card-footer-item">
              <button class = "button is-medium is-fullwidth is-outlined is-info has-background-white">
                Book
              </button>
            </a>
          </footer>

        </div>
      </div>
    </React.Fragment>
  )
}

export default TripInfo;