import React from "react";
import HeaderControl from "./HeaderControl";
import MainControl from "./MainControl";
import TripInfoControl from "./TripInfoControl";
import 'bulma/css/bulma.min.css';
import './App.css';

function App(){
  return(
    <React.Fragment>
      <div class = "webContainer">
            <section class = "hero is-info is-primary">
                  <div class = "hero-body">
                    <HeaderControl/>
                </div>
            </section>
      <div class = "contentContainer">
        <section class = "section">
              <div class = "columns">
                <div class = "column">
                    <MainControl/>
                  </div>
                <div class = "column">
                  <TripInfoControl/>
                </div>
              </div>
        </section>
      </div>
    </div>

    </React.Fragment>
  )
}

export default App;