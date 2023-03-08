import React from "react";
import "./TripInfo.css";  
import PropTypes from "prop-types"; 

export default function ReccomendationContainer(props){

  const {cityName, handleYesButtonSubmission, handleNextButtonSubmission} = props;

  return(
    <React.Fragment>
    <form>
      <div class = "reccomendationContainerBox">
        <div class = "box">
          <div class="card has-background-link-light">
            <p class="card-header-title">
              <h3 class = "title is-3">Based on your profile, you might enjoy: {cityName}</h3>
            </p>
            <div class = "card-content">
              <div class = "content">
                <h5>Some facts about {}!</h5>
                <div class = "box">
                  <p>Wine country flair</p>
                </div>
              </div>
            </div>
            <footer class = "card-footer">
              <div class = "columns is-centered">
                <div class = "column">
                  <button class = "button is-medium is-fullwidth is-outlined is-info has-background-white"
                  typeSubmit
                  onSubmit = {props.onClickingSelect}>
                    Select
                  </button>
                </div>
                <div class = "column">
                  <button class = "button is-medium is-fullwidth is-outlined is-info has-background-white"
                  onClick = {props.onClickingNext}>
                    Next!
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </form>
    </React.Fragment>
  )
}

ReccomendationContainer.propTypes = {
  filteredCities: PropTypes.string,
  onClickingSelect: PropTypes.func, 
  onClickingNext: PropTypes.func
}
