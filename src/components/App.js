import React from "react";
import HeaderControl from "./HeaderControl";
import MainControl from "./MainControl";
import TripInfoControl from "./TripInfoControl";
import 'bulma/css/bulma.min.css';

function App(){
  return(
    <React.Fragment>
      <section class = "hero is-info is-large">
        <HeaderControl/>
      </section>
      <div class = "webContainer">
        <div class = "columns">
          <div class = "column">
            <MainControl/>
          </div>
          <div class = "column">
            <TripInfoControl/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;