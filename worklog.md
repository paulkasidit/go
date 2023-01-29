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

#### Should create new user entry into database on form submission 
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

* e.g Questionnaire for username "PAUL", [x] is the selected value

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
    pastTrip: (Object array of past trips).

``` 


## Sign In Form 


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
#### JSON fields of the built userProfile "budget" & "accomodationPreferences" is fed into the AIRBNB API in order to determine appropriate accomodations"  

####  AirBnb API displays atleast three accomodations mathcing the user preferences inside the given Airbnb component. 

