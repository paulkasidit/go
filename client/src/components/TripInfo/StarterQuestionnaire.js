import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./TripInfo.css";  
import PropTypes from "prop-types"; 

export default function StarterQuestionnaire(props){

  const { user } = props 

  const [form, setForm] = useState({
    username: user.email,
    tripInterests: "",
    accomodationBudget: "",
    accomodationPreference: "", 
    pastTrips: {}
  })
  const navigate = useNavigate();

  function updateForm(value) { 
    return setForm((prev) => {
      return {...prev, ...value};
    })
  }

  async function handleStarterQuestionnaireFormSubmission(event){
    event.preventDefault();

    const newUserProfile = {...form};

    await fetch('http://localhost:5000/record/add',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserProfile),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({
      username: user.email,
      tripInterests: "",
      accomodationBudget: "",
      accomodationPreference: "", 
      pastTrips: {}
    });
    navigate("/");
  }

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
                  checked = {form.tripInterests === "outdoors"}
                  onChange = {(event) => updateForm({tripInterests: event.target.value})}
                />
                Outdoors
              </label>
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "tripInterests"
                  value = "nightlife"
                  id  = "nightlife"
                  checked = {form.tripInterests === "nightlife"}
                  onChange = {(event) => updateForm({tripInterests: event.target.value})}
                />
                Nightlife
              </label>
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "tripInterests"
                  value = "dining"
                  id  = "dining"
                  checked = {form.tripInterests === "dining"}
                  onChange = {(event) => updateForm({tripInterests: event.target.value})}
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
                  checked = {form.accomodationPreference === "family"}
                  onChange = {(event) => updateForm({accomodationPreference: event.target.value})}
                />
                Family
              </label>
              <label class = "radio">
                <input 
                  type = "radio"
                  name = "accomodationPreference"
                  value = "bachelor"
                  id  = "bachelor"
                  checked = {form.accomodationPreference === "bachelor"}
                  onChange = {(event) => updateForm({accomodationPreference: event.target.value})}
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
                    checked = {form.accomodationBudget === "low"}
                    onChange = {(event) => updateForm({accomodationBudget: event.target.value})}
                  />
                  $
              </label>
              <label class = "radio">
                  <input 
                    type = "radio"
                    name = "accomodationBudget"
                    value = "middle"
                    id  = "middle"
                    checked = {form.accomodationBudget === "middle"}
                    onChange = {(event) => updateForm({accomodationBudget: event.target.value})}
                  />
                  $$
              </label>
              <label class = "radio">
                  <input 
                    type = "radio"
                    name = "accomodationBudget"
                    value = "high"
                    id  = "high"
                    checked = {form.accomodationBudget === "high"}
                    onChange = {(event) => updateForm({accomodationBudget: event.target.value})}
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
