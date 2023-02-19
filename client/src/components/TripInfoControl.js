import React, { useState } from 'react';
import "./App.css";
import "./TripInfo/TripInfo.css"; 
import TripInfo from './TripInfo/TripInfo';
import DateInputForm from './TripInfo/DateInputForm';
import StarterQuestionnaire from './TripInfo/StarterQuestionnaire';
import { useAuth0 } from '@auth0/auth0-react';

function TripInfoControl (){
  
  const {user, isAuthenticated, isLoading} = useAuth0();
  const [userProfile, setUserProfile] = useState([]);
  const [userHasProfile, setUserHasProfile] = useState(false);

  const handleNewUserProfileCreation = (newUserProfile) => { 
    const currentUserProfile = userProfile.concat(newUserProfile)
    setUserHasProfile(true);
    console.log(currentUserProfile)
  }

  let currentlyVisibleState = null
  
  return(
    <React.Fragment>
      <StarterQuestionnaire
      user = {user}
      onNewUserProfileCreation = {handleNewUserProfileCreation}/>
    </React.Fragment>
  )
  
};

export default TripInfoControl;