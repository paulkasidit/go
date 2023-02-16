import React, { useState } from 'react';
import "./Header/Header.css"
import Navbar from './Header/NavBar'; 
import SearchBar from './Header/SearchBar';
import AccountDetail from './Header/AccountDetail';
import AccountInfo from './Header/AccountInfo'; 

function HeaderControl(){
  
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [accountInfoVisibleOnPage, setAccountInfoVisibleOnPage] = useState(true);
  
  let buttonText = null;
  let currentlyVisibleState = null; 

  if (accountInfoVisibleOnPage){
    currentlyVisibleState = <AccountInfo/>
    buttonText = "Log Out";
  } else {
    buttonText = "Log In";
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
                    <button class = "button is-outlined">
                      {buttonText}
                    </button>
                  </div>
                </div>
              </nav>
          </div>
        </div>
      </React.Fragment>
    )

};

export default HeaderControl;