import React, { useState } from 'react';
import "./Header/Header.css"
import Navbar from './Header/NavBar'; 
import SearchBar from './Header/SearchBar';
import AccountDetail from './Header/AccountDetail';
import AccountInfo from './Header/AccountInfo'; 
import LoginButton from './Header/LoginButton';
import LogoutButton from './Header/LogoutButton';
import { faListCheck, faTruckField, faTruckFieldUn } from '@fortawesome/free-solid-svg-icons';
function HeaderControl(){
  
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [accountInfoVisibleOnPage, setAccountInfoVisibleOnPage] = useState(false);
  
  let sessionButton = null;
  let currentlyVisibleState = null; 

  if (accountInfoVisibleOnPage){
    currentlyVisibleState = <AccountInfo/>
    sessionButton = <LogoutButton/>;
  } else {
    sessionButton = <LoginButton/>;
  }
  
    return(
      <React.Fragment>
        <div class = "headerContainer">
          <div class = "columns">
            <div class = "column">
              <Navbar/>
            </div>
            <div class = "column">
              <SearchBar/>
            </div>
              <nav class = "is-breadcrumb is-right">
                <div class = "columns is-gapless">
                  <div class = "column">
                    {currentlyVisibleState}
                  </div>
                  <div class = "column">
                      {sessionButton}
                  </div>
                </div>
              </nav>
          </div>
        </div>
      </React.Fragment>
    )
};


export default HeaderControl;