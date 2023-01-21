import React from "react";
import "./TripInfo.css";  

function TripInfo() { 
  return (
    <React.Fragment>
      <div class = "tripInfoContainer">
        <div class = "box">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
              Details of your trip
              </p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class = "card-content">
              <div class =  "content">
                <h2 class = "subtitle">Day 1</h2>
                <p>Vina Robles winery</p>
                <p>Day 2:</p>
                <p>Sensorio Field of Lights</p>
                <p>Day 3:</p>
                <p>Check out of your accomodation and head back to Los Angeles</p>
              </div>
            </div>
          </div>
          <footer class = "card-footer">
            <a href = "#" class = "card-footer-item">
              <button class = "button is-medium is-fullwidth is-outlined is-info ">
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