import React, { useState, useEffect} from "react";
import "./App.css";
import "./TripInfo/TripInfo.css"; 
import TripInfo from './TripInfo/TripInfo';
import DateInputForm from './TripInfo/DateInputForm';
import StarterQuestionnaire from './TripInfo/StarterQuestionnaire';
import ReccomendationContainer from "./TripInfo/ReccomendationContainer";
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function TripInfoControl (){
  // Hooks for checking if user is authenticated, for the current userProfile,
  // and checking if the user has a profile(to decide what to render)
  const {user, isAuthenticated} = useAuth0();
  const [userProfile, setUserProfile] = useState([]);
  const [userHasProfile, setUserHasProfile] = useState(false);
  //Hooks for selecting city
  const [currentAvailableCities ,setCurrentAvailableCities] = useState([]);
  const [cityHasBeenSelected, setCityHasBeenSelected] = useState(false)
  const  [selectedCity, setSelectedCity] = useState(null)
  //Hooks to set the current location for user
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  //Getting the user's current location 
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    });
  })
   //Function to get list of cities in radius
  //Function only called if the current avaible cities is null 
  async function getCityData(){

      const minLat = lat - 3
      const maxLat = lat + 3
      const minLon = lng - 3
      const maxLon = lng + 3
  
      const response = await axios.get('https://api.api-ninjas.com/v1/city?'+
      + "min_lon="
      + minLon 
      +"&max_lon="
      + maxLon
      +"&min_lat="
      + minLat
      +"&max_lat="
      + maxLat
      +"&limit="
      + 5,
        {headers: 
          {
            'X-Api-Key': process.env.REACT_APP_API_NINJAS_API_KEY
          }
        },
      )
      return response.data
    }

  async function getCurrentAvailableCities(){
    let newCurrentAvailableCitiesArray = await getCityData();
    setCurrentAvailableCities(newCurrentAvailableCitiesArray)
  }

  getCurrentAvailableCities();
  console.log(currentAvailableCities)

  //Function to check if the user already has a profile and to set the userProfile hook
  async function getUserInformation(user) {
    const response = await fetch('http://localhost:5000/record/');
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
        const currentUserProfile = userProfile.concat(foundUserProfile);
        setUserProfile(currentUserProfile);
        setUserHasProfile(true);
        return foundUserProfile;
      } else {
        setUserHasProfile(false);
      }
    });
  }

  //Setting city interests based on user's location 
  // function filterCities(availableCities, userProfile){
  //   if (userProfile.interests === 'nightlife' ){
  //     let nightlifeCites = 
  //   }
  //   else if (userHasProfile.interests === 'outdoors'){

  //   } else (userHasProfile.interests === 'family') {

  //   }
  // }

  //Only call this function if user is logged in
  if (isAuthenticated){
     getUserInformation(user)
  }


  //Function to handle the creation of a new User Profile
  const handleNewUserProfileCreation = (newUserProfile) => { 
    const currentUserProfile = userProfile.concat(newUserProfile)
    setUserHasProfile(true);
    console.log(currentUserProfile)
  }

  //Setting the currenly visible state of the page
  let currentlyVisibleState = null;
  let currentlyVisibleForm = null;

  if(isAuthenticated && !userHasProfile){
    currentlyVisibleForm =  <StarterQuestionnaire
                              user = {user}
                              onNewUserProfileCreation = {handleNewUserProfileCreation}/>
    currentlyVisibleState = null
  } else if(isAuthenticated && userHasProfile) {
    currentlyVisibleForm = <DateInputForm/>
    currentlyVisibleState = <ReccomendationContainer
    currentAvailableCities = {currentAvailableCities}/> 
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