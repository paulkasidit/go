import React, { useState, useEffect} from "react";
import "./App.css";
import "./Main/Main.css"
import AirbnbAPI from './Main/AirbnbAPI';
import axios from 'axios';
import GoogleMapsAPI from './Main/GoogleMapsAPI';

function MainControl (){
  //Hooks to set the current location for user
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  //Default location that will be rendered on page loading. 
  const userCurrentLocation = {
    center: {lat: lat, lng: lng}, 
    zoom: 12
  }
  
  //Function to get list of cities in radius
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
    console.log(axios.get)
    console.log(response.data)
  }

  //Getting the user's current location 
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    });
  })

  const markers = [ 
    {
      id:1, 
      lat: userCurrentLocation.center.lat,
      lng: userCurrentLocation.center.lng,
      text: "HOME"
    },
    {
      id:2, 
      lat: 39.5299, 
      lng: -119.8143, 
      text: "DESTINATION"
    }
  ]

  let currentlyVisibleState =  <GoogleMapsAPI 
                                userCurrentLocation = {userCurrentLocation}
                                pinsList = {markers}
                                />

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    ) 
};

export default MainControl;