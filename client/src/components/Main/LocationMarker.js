import React from "react"; 
import PropTypes from "prop-types";  
import "./Main.css";   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

export default function LocationMarker(props){

  const {id, lat, lng, text} = props; 

  return(
    <span class = "icon-text">
      <div class = "box radius-large"> {text} </div>
        <span class = "icon">
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
      </span>
    </span>
  )
}

LocationMarker.prototypes = {
  markedLocation: PropTypes.object
}