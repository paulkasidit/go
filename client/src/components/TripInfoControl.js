import React from 'react';
import "./App.css";
import "./TripInfo/TripInfo.css"; 
import TripInfo from './TripInfo/TripInfo';
import DateInputForm from './TripInfo/DateInputForm';
import StarterQuestionnaire from './TripInfo/StarterQuestionnaire';

class TripInfoControl extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      userisLoggedIn: false, 
      userHasProfile: false,
      formVisible: true, 
      selectedDestination: null,
      selectedTripFrom: null,
      selectedTripUntil: null, 
      selectedDestinations: null,
      homeLocation: null
    }
  }

  render(){
    let currentlyVisibleState = null
    return(
      <React.Fragment>
        <StarterQuestionnaire/>
      </React.Fragment>
    )
  }
  
};

export default TripInfoControl;