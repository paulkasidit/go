import React from 'react';
import "./App.css";
import Navbar from './Header/NavBar'; 
import SearchBar from './Header/SearchBar';
import AccountDetail from './Header/AccountDetail';
import AccountInfo from './Header/AccountInfo'; 

class HeaderControl extends React.Component {
  
  render(){
    return(
      <React.Fragment>
        <div class = "columns is-wide">
          <div class = "column">
            <Navbar/>
          </div>
          <div class = "column">
            <SearchBar/>
          </div>
          <div class = "column">
            <AccountInfo/>
          </div>
        </div>
      </React.Fragment>
    )
  }

};

export default HeaderControl;