import React from "react"; 
import PropTypes from "prop-types";  
import "./Main.css";   

export default function LocationMarker(props){

  const {lat, lng, text} = props; 

  return(
    <div class = "markedLocationPin"> 
      {text}
    </div>
  )
}

LocationMarker.prototypes = {
  markedLocation: PropTypes.object
}