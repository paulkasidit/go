import React, { useState, useEffect } from "react";
import "./App.css";
import "./TripInfo/TripInfo.css"; 
import TripInfo from './TripInfo/TripInfo';
import DateInputForm from './TripInfo/DateInputForm';
import StarterQuestionnaire from './TripInfo/StarterQuestionnaire';
import { useAuth0 } from '@auth0/auth0-react';

function TripInfoControl (){
  //Hooks for checking if user is authenticated, for the current userProfile,
  // and checking if the user has a profile(to decide what to render)
  const {user, isAuthenticated, isLoading} = useAuth0();
  const [userProfile, setUserProfile] = useState([]);
  const [userHasProfile, setUserHasProfile] = useState(false);

  //Function to check if the user already has a profile and to set the userProfile hook
    async function getUserInformation(user) {
      const response = await fetch(`http://localhost:5000/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
  
      Object.entries(records).forEach((entry) => {
        const [key, value] = entry;
        if (value.username === user.email){
          const foundUserProfile = records[key]
          setUserHasProfile(true);
          return foundUserProfile;
        }
      });
  }
  getUserInformation(user)

  //Function to handle the creation of a new User Profile
  const handleNewUserProfileCreation = (newUserProfile) => { 
    const currentUserProfile = userProfile.concat(newUserProfile)
    setUserHasProfile(true);
    console.log(currentUserProfile)
  }

  let currentlyVisibleState = null;
  let currentlyVisibleForm = null;

  if(isAuthenticated && !userHasProfile){
    currentlyVisibleForm =  <StarterQuestionnaire
                              user = {user}
                              onNewUserProfileCreation = {handleNewUserProfileCreation}/>
    currentlyVisibleState = null
  } else if(isAuthenticated && userHasProfile) {
    currentlyVisibleForm = <DateInputForm/>
    currentlyVisibleState = <TripInfo/> 
  } else {
    currentlyVisibleForm = null
    currentlyVisibleState = null
  }
  
  return(
    <React.Fragment>
      {currentlyVisibleForm}
      {currentlyVisibleState}
    </React.Fragment>
  )
  
};

export default TripInfoControl;