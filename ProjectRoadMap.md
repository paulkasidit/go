# Worklog 

# Project ROAD MAP

* Components are listed chronologically in the order that they will be executed. 

## 1. User Questionnaire 
### If user does not have an account, questionnaire redirects to a sign up form! 

## Registration Form

#### Example of form 

``` 
  <form id = "registrationForm">
    <input name = "username">Username</input>
    <input name = "password">Password</input>
  </form>
  
``` 

#### Should create new user entry into database on form submission.
* e.g 
``` 
{
  uuid: 1123556,
  username: "PAUL",
  password: 23123123123 (hashed),
  userProfile: { 
    interests: [], 
    budget: "", 
    accomodationPreference: ""
  },
  pastTrips:[]
}

``` 

#### Get Questionnaire to send form feedback into the database in the form of JSON, questionnaire will build a profile of the user. 

* e.g Example questionnaire for username "PAUL"
( [x] is the selected value)

``` 
  1.What are your interests? (select at least one)
    * outdoor activites 
    * nightlife [x]
    * dining
  
  2.What are your accomodation preferences? (select at least one)
    * family
    * bachelor [x]
  
  3.What is your budget? 
    * $ (form value: "low")
    * $$ (form value: "middle")
    * $$$ (form value: "high") [x]
  
``` 

* The result should be, 

``` 
    username: "PAUL",
    uuid: 1123556,
    password: 23123123123 (hashed)
    userProfile: {
      interests: ["nightlife"]
      budget: "high", 
      accomodationPreference: ["bachelor","family"]
    }
    pastTrips: []

``` 

## Sign In Form 

#### There should be a link to the registration form for users who do not have an account.

#### Should return the current session of the user 
``` 
    username: "PAUL",
    uuid: 1123556,
    password: 23123123123 (hashed)
    userProfile: {
      interests: ["nightlife"]
      budget: "high", 
      accomodationPreference: ["bachelor","family"]
    }
    pastTrips: []
``` 

#### Example of form 

``` 
  <form id = "signInForm">
    <input name = "username">Username</input>
    <input name = "password">Password</input>
  </form>
  
``` 

## 2. Google MAPS API
####  Get Google MAPS API to render current location.
  * Render Google MAPS inside of given component. 
####  Get Google MAPS API to map desinations more than 50 miles from me and less than 150 miles away. 
  * Figure out way to feed queries into google maps API based on given userProfile data. 
####  Get Google MAPS API to send back JSON data of selected city. 
  * e.g 
  ``` 
    selectedCity: "Monterey"
  ``` 
  * Update MongoDB SQL table of data relating to user. 
  ``` 
  e.g 
  { 
    uuid: 1123556,
    username: "PAUL",
    password: 23123123123 (hashed)
    userProfile: {
      interests: ["nightlife","dining"]
      budget: "high", 
      accomodationPreference: "bachelor"
    }
    pastTrips: [
      id: 1: {
        destination: "Monterey", 
        tripFrom: "12/23/23",
        tripUntil: "12/25/25",
        accomodation: "123 Sixteen Ave". 
        accomodationLink: "www.airbnb/accomodation.com",
        visitedDestinations: [
          "Monterey Bay Aquarium",
          "Ten Mile Drive"
        ]
      }, 
      id: 2 { 
        destination: "Big Sur", 
        tripFrom: "12/23/23",
        tripUntil: "12/25/25",
        accomodation: "1 Pacific Coast Hightway". 
        accomodationLink: "www.airbnb/accomodation.com",
        visitedDestinations: [
          "Monterey Bay Aquarium",
          "Ten Mile Drive"
        ]
      }
    ]
  }
  ``` 

## 3. AirBnb API 
#### JSON fields of the User Object's userProfile object "budget" & "accomodationPreferences" arrays is fed into the AIRBNB API in order to determine appropriate accomodations.   

####  AirBnb API displays atleast three accomodations mathcing the user preferences inside the given Airbnb component. 

## 4. TripInfo 

####  This component will be managed by state.

* Example of fictional current state for website 
``` 
e.g { 
  selectedDestination: "Paso Robles", 
  selectedTripFrom: "12/23/23",
  selectedTripUntil: "12/25/25",
  selectedDestinations: ["Vina Robles Winery", "Booker Vineyards"],
  homeLocation: "Los Angeles",
  bookedTrip: false (? this will determine which forms to render in the tripInfo Container)
} 
``` 

* Example of rendered content
``` 
  <div class = "tripInfoContainer>
    <h1>Your { this.props.selectedDestination } itinerary </h1>
    <ul>
      <li> 
        <p>{this.props.selectedTripFrom}</p>
        <p>{this.props.selectedDestinations[0]}</p>
      </li>
      <li>
        <p>{this.props.selectedTripFrom}</p>
        <p>{this.props.selectedDestinations[1]}</p>
      </li>
    </ul>
    <p>Checkout of your accomodation and head back to {this.props.homeLocation}</p>
  </div>
``` 
#### onSubmit click handler for "BOOK" button 

* Steps of execution
  1. Hide all forms in FormController 
  2. Your trip has been booked. 
  3. Updates MongoDb database entry for the user

  * Example form data: 
  ``` 
  {
    selectedDestination: "Paso Robles", 
    selectedTripFrom: "12/23/23",
    selectedTripUntil: "12/25/25",
    selectedDestinations: ["Vina Robles Winery", "Booker Vineyards"],
    homeLocation: "Los Angeles",
  }
  ``` 
  * Before: 
  ``` 
  { 
    uuid: 1123556,
    username: "PAUL",
    password: 23123123123 (hashed)
    userProfile: {
      interests: ["nightlife","dining"]
      budget: "high", 
      accomodationPreference: "bachelor"
    }
    pastTrips: []
  }
  ```

  * After: 

  ``` 
  { 
    uuid: 1123556,
    username: "PAUL",
    password: 23123123123 (hashed)
    userProfile: {
      interests: ["nightlife","dining"]
      budget: "high", 
      accomodationPreference: "bachelor"
    }
    pastTrips: [
      id: 1: {
        destination: "Paso Robles", 
        tripFrom: "12/23/23",
        tripUntil: "12/25/25",
        accomodation: "123 Sixteen Ave". 
        accomodationLink: "www.airbnb/accomodation.com",
        visitedDestinations: [
          "Vina Robles Winery",
          "Booker Vineyards"
        ]
      }
  }
  ``` 
   

# TripInfoController  

## Core Logic 
### Initial State
``` 
intialState = {
  userisLoggedIn: false, 
  userHasProfile: false,
  formVisible: true, 
  selectedDestination: null,
  selectedTripFrom: null,
  selectedTripUntil: null, 
  selectedDestinations: null,
  homeLocation: null
}
``` 
#### If there is currently no user session, render the login form. 

* Expected State 
``` 
thisState = {
  --> userIsLoggedIn: false, 
  userHasProfile: false,
  --> formVisible: true, 
  selectedDestination: null,
  selectedTripFrom: null,
  selectedTripUntil: null, 
  selectedDestinations: null,
  homeLocation: null
}
``` 

#### If there is a user session, hide the login form. 

* Expected State 
``` 
thisState = {
  --> userIsLoggedIn: true, 
  userHasProfile: false,
  --> formVisible: false, 
  selectedDestination: null,
  selectedTripFrom: null,
  selectedTripUntil: null, 
  selectedDestinations: null,
  homeLocation: null
}
``` 

#### If user is logged in and already has a profile, hide the user questionnaire.  

* Expected State 
``` 
thisState = {
  --> userIsLoggedIn: true,
  --> userHasProfile: true,
  --> formVisible: false, 
  selectedDestination: null,
  selectedTripFrom: null,
  selectedTripUntil: null, 
  selectedDestinations: null,
  homeLocation: null
}
``` 

#### If user is logged in, but does not have a profile, display the user questionnaire. 

* Expected State 
``` 
thisState = {
  --> userIsLoggedIn: true,
  --> userHasProfile: true,
  --> formVisible: true, 
  selectedDestination: null,
  selectedTripFrom: null,
  selectedTripUntil: null, 
  selectedDestinations: null,
  homeLocation: null
}
```

#### If user is logged in, has a profile, and has the null values set to a value, display the tripInfoContainer. 

* Expected State 
``` 
thisState = {
  --> userIsLoggedIn: true,
  --> userHasProfile: true,
  --> formVisible: false, 
  --> selectedDestination: "A",
  --> selectedTripFrom: "B",
  --> selectedTripUntil: "C", 
  --> selectedDestinations: "D",
  --> homeLocation: "E"
}
```

# MainController

## Core Logic  

#### Async function to wait for Google Maps API component to finish executing before executing Airbnb API component 


