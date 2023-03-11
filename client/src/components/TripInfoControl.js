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
  //Sample data to be deleted later
  let sampleArr = [{country: "US",is_capital:false,name: "Los Angeles",population: 12750807},{country: "US",is_capital: false,name: "San Francisco",population: 3592294},{country: "US",is_capital: false,name: "San Bruno",population: 3592294}]
  let sampleCityDescriptionArray  = [{name: "Los Angeles", 
                                     description: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes." },
                                    {name: "San Bruno", 
                                     description: "San Bruno is a city in San Mateo County, California, United States, incorporated in 1914. The population was 43,908 at the 2020 United States Census"},
                                    {name: "San Francisco", 
                                     description: "San Francisco, officially the City and County of San Francisco, is a commercial, financial, and cultural center of Northern California."}
                                    ]
  // Hooks for checking if user is authenticated, for the current userProfile,
  // and checking if the user has a profile(to decide what to render)
  const {user, isAuthenticated} = useAuth0();
  const [userProfile, setUserProfile] = useState([]);
  const [userHasProfile, setUserHasProfile] = useState(false);

  //Hooks for selecting city to visit
  const [currentAvailableCities ,setCurrentAvailableCities] = useState(sampleArr);
  const [filteredCities, setFilteredCities] = useState([])
  const [cityHasBeenSelected, setCityHasBeenSelected] = useState(false)
  const [cityDescription, setCityDescription] = useState(null)
  const  [selectedCity, setSelectedCity] = useState("Los Angeles")

  //Hooks to set the current location for user
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  
  //Getting user profile
  useEffect(()=> {
    getUserInformation(user)
    const filteredCityArray = filterCities(currentAvailableCities, userProfile)
    console.log(filteredCityArray)
    setFilteredCities(filteredCityArray)
  },[isAuthenticated])

  //Getting the user's current location 
  useEffect(() => {
    getCurrentLocation()
  },[]);
  useEffect(() => {
    getCityDescription()
  },[selectedCity])
  //Getting nearby cities 
  // useEffect(() => {
  //   getCityData();
  // },[lat,lng])
  //Filtering cities 
  // useEffect(()=>{
  //   getPlaceData();
  // },[selectedCity])

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

  async function getPlaceData(){
    
    

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

  function getCityDescription (){
      //Looping to find index of current city in array, and returning the city description at the next index
      for (let cityDescription of sampleCityDescriptionArray){
        for (const [k,v] of Object.entries(cityDescription)){
          if (v === selectedCity){
            const currentCityDescriptionIndex = sampleCityDescriptionArray.indexOf(cityDescription)
            console.log(currentCityDescriptionIndex)
            setCityDescription(sampleCityDescriptionArray[currentCityDescriptionIndex].description)
        }
      }
    }
  }

  //Function to handle filtering cities 
  function filterCities(thisSessionCurrentAvailableCities, thisSessionUserProfile){
    if (thisSessionUserProfile.tripInterests === "nightlife"){
       return thisSessionCurrentAvailableCities.slice(0,3)
    } else if (thisSessionUserProfile.tripInterests === "outdoors"){
       return thisSessionCurrentAvailableCities.slice(-1, -4)
    } else  {
       return thisSessionCurrentAvailableCities
    } 
  }

  
  const handleSelectClick = (e) => {
    e.preventDefault()
    setCityHasBeenSelected(true)
  }

  const handleNextClick = (e) => {
    e.preventDefault();

    //Looping to find index of current city in array, and returning the city at the next index 
    for (let cityEntry of currentAvailableCities){
      for (const [k,v] of Object.entries(cityEntry)){
        if (v === selectedCity){
          const currentCityIndex = currentAvailableCities.indexOf(cityEntry)
          let nextCityIndex = currentAvailableCities[currentCityIndex + 1]
          if(currentCityIndex === currentAvailableCities.length - 1)
            nextCityIndex = currentAvailableCities[0]
            setSelectedCity(nextCityIndex.name)
        } 
      }
    }

  }

  //Setting the currenly visible state of the page
  let currentlyVisibleState = null
  let currentlyVisibleForm = null

  if(isAuthenticated && !userHasProfile){
    currentlyVisibleForm =  <StarterQuestionnaire
                              user = {user}
                              onNewUserProfileCreation = {handleNewUserProfileCreation}/>
    currentlyVisibleState = null
  } else if(isAuthenticated && userHasProfile && !cityHasBeenSelected) {
    currentlyVisibleForm = null
    currentlyVisibleState = <ReccomendationContainer
    selectedCity = {selectedCity}
    cityDescription = {cityDescription}
    onClickingSelect = {handleSelectClick}
    onClickingNext = {handleNextClick}/> 
  } else if(isAuthenticated && userHasProfile && cityHasBeenSelected){
    currentlyVisibleForm = <DateInputForm/>
    currentlyVisibleState = <TripInfo 
    selectedCity = {selectedCity}
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