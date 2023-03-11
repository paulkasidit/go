import React from 'react';
import "./App.css";
import "./TripInfo/TripInfo.css"; 
import TripInfo from './TripInfo/TripInfo';
import InputForm from './TripInfo/InputForm';

class TripInfoControl extends React.Component {
  
  render(){
    return(
      <React.Fragment>
        <InputForm/>
        <TripInfo/>
      </React.Fragment>
    )
  }
  
};

export default TripInfoControl;