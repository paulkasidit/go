import React, { useState } from "react";
import "./TripInfo.css";  
import PropTypes from "prop-types"; 
import { v4 } from 'uuid';  

function StarterQuestionnaire(props){

  const { user } = props 
  // function handleStarterQuestionnaireFormSubmission(event){
  //   event.preventDefault();
  //   props.onNewUserProfileCreation({
  //     id: v4(),
  //     username: user.email,
  //     tripInterests: event.target.tripInterests.value, 
  //     accomodationBudget: event.target.accomodationBudget.value,
  //     accomodationPreference: event.target.accomodationPreference.value,
  //     pastTrips: {}
  //   })
  // }

  const [form, setForm] = useState({
    username: "",
    tripInterests: "",
    accomodationBudget: "",
    accomodationPreference: "", 
    pastTrips: {}
  })

  return(
    <React.Fragment>
      <div class = "box">
        <h1 class = "title">Looks like it's your first time here, 
        we'd like to get to know you better. 
        </h1>
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
            <br/>
            <button class = "button is-medium is-fullwidth is-outlined is-info has-background-white" type = "submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  )
}

StarterQuestionnaire.propTypes = { 
  onNewUserProfileCreation: PropTypes.func
}

export default StarterQuestionnaire