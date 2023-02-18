import React, { useState } from 'react';
import "./Header/Header.css"
import Navbar from './Header/NavBar'; 
import SearchBar from './Header/SearchBar';
import AccountDetail from './Header/AccountDetail';
import AccountInfo from './Header/AccountInfo'; 
import LoginButton from './Header/LoginButton';
import LogoutButton from './Header/LogoutButton';
import { faListCheck, faTruckField, faTruckFieldUn } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

function HeaderControl(){

  const {user, isAuthenticated, isLoading} = useAuth0();

  let sessionButton = null;
  let currentlyVisibleState = null; 
  
  if (isAuthenticated){
    currentlyVisibleState = <AccountInfo/>
    sessionButton = <LogoutButton/>
  } else { 
    sessionButton = <LoginButton/>
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