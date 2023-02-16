import React, { useState } from 'react';
import "./Header/Header.css"
import Navbar from './Header/NavBar'; 
import SearchBar from './Header/SearchBar';
import AccountDetail from './Header/AccountDetail';
import AccountInfo from './Header/AccountInfo'; 

function HeaderControl(){
  
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [accountInfoVisibleOnPage, setAccountInfoVisibleOnPage] = useState(false);
  let buttonText = null;
  let currentlyVisibleState = null; 
  
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
                    <AccountInfo/>
                  </div>
                  <div class = "column">
                    <button class = "button is-outlined">
                      <a href = "#">Logout</a>
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