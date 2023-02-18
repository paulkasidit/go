import React from "react";
import "./TripInfo.css";  

function StarterQuestionnaire(){

  function handleStarterQuestionnaireFormSubmission(event){
    event.preventDefault();
    console.log(event.target.tripInterests.value)
    console.log(event.target.accomodationPreference.value)
    console.log(event.target.accomodationBudget.value)
  }

  return(
    <React.Fragment>
      <div class = "box">
        <form onSubmit = {handleStarterQuestionnaireFormSubmission}>
          <p>What are your interests?</p>
          <div class = "control">
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "tripInterests"
                  value = "outdoors"
                  id  = "outdoors"
                />
                Outdoors
              </label>
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "tripInterests"
                  value = "nightlife"
                  id  = "nightlife"
                />
                Nightlife
              </label>
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "tripInterests"
                  value = "dining"
                  id  = "dining"
                />
                Dining
              </label>
            </div>
            <br/>
            <p>What are your accomodation preferences?</p>
            <div class = "control">
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "accomodationPreference"
                  value = "family"
                  id  = "family"
                />
                Family
              </label>
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "accomodationPreference"
                  value = "dining"
                  id  = "dining"
                />
                Bachelor
              </label>
            </div>
            <br/>
            <p>Most importantly, what is your budget? </p>
            <div class = "control">
              <label class = "radio">
                  <input 
                    type = "radio"
                    name = "accomodationBudget"
                    value = "low"
                    id  = "low"
                  />
                  $
              </label>
              <label class = "radio">
                  <input 
                    type = "radio"
                    name = "accomodationBudget"
                    value = "middle"
                    id  = "middle"
                  />
                  $$
              </label>
              <label class = "radio">
                  <input 
                    type = "radio"
                    name = "accomodationBudget"
                    value = "high"
                    id  = "high"
                  />
                  $$$
              </label>
            </div>
            <button type = "submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default StarterQuestionnaire