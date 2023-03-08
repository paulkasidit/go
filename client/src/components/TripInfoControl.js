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

  //Hooks for selecting city to visit
  const [currentAvailableCities ,setCurrentAvailableCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([])
  const [showNextCity, setShowNextCity] = useState([])
  const [cityHasBeenSelected, setCityHasBeenSelected] = useState(false)
  const  [selectedCity, setSelectedCity] = useState(null)

  //Hooks to set the current location for user
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  console.log(currentAvailableCities)
  //Getting user profile
  useEffect(()=> {
    getUserInformation(user)
  },[isAuthenticated])

  //Getting the user's current location 
  useEffect(() => {
    getCurrentLocation()
  },[]);
  //Getting nearby cities 
  useEffect(() => {
    getCityData();
  },[lat,lng])
  //Filtering cities 

  //Function to get user's current location 
  function getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    })
  }

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

  //Function to get city data within radius
  async function getCityData(){
    const headers = { 
      'X-Api-Key': process.env.REACT_APP_API_NINJAS_API_KEY
    }
    const minLat = lat - 3
    const maxLat = lat + 3
    const minLon = lng - 3
    const maxLon = lng + 3
    const response = await axios.get('https://api.api-ninjas.com/v1/city?'
    + "min_lon="
    + minLon 
    +"&max_lon="
    + maxLon
    +"&min_lat="
    + minLat
    +"&max_lat="
    + maxLat
    +"&limit="
    + 5, {headers},
    )
    setCurrentAvailableCities(response.data)
  }

  //Function to handle the creation of a new User Profile
  const handleNewUserProfileCreation = (newUserProfile) => { 
    const currentUserProfile = userProfile.concat(newUserProfile)
    setUserHasProfile(true);
  }

  //Function to handle filtering cities 
  function filterCities(thisSessionCurrentAvailableCities, thisSessionUserProfile){
    let result = []
    if (thisSessionUserProfile.tripInterests === "nightlife"){
       result.push(currentAvailableCities.slice(0,2))
    } else if (thisSessionUserProfile.tripInterests === "outdoors"){
       result.push(currentAvailableCities.slice(-1, -3))
    } else  {
       result.push(currentAvailableCities.slice(0,3))
    } 
    return result;
  }

  //Function to loop through results 
  // const loopThroughAvailableCities = (sampleArr) => {
  //   for (let i = 0; i <= sampleArr.length; i++){
  //     return sampleArr[i + 1];
  //   }
  // }

  // let sampleArr = [{country: "US",is_capital:false,name: "Los Angeles",population: 12750807},{country: "US",is_capital: false,name: "San Francisco",population: 3592294}]

  // console.log(loopThroughAvailableCities(sampleArr))
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
    /> 
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