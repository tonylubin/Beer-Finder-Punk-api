# BEER FINDER APP

Tasked with building a project in REACT JS that utilises BrewDog's PUNK Api

VISIT:  https://tonylubin.github.io/Beer-Finder---Punk-Api---React

# Outcomes: #

(1) ability to search for beers via name/letter and page will update while user types each letter  
(2) can filter content on 3 conditions:   
    - High Alcohol (ABV value greater than 6%)  
    - Classic Range (was first brewed before 2010)  
    - High Acidity (ph lower than 4)
(3) demonstrate how to read Api's documentation and use it inside the project

# Design/Display: # 

- Created a beer finder app that displays the beers on the web page in a card format using CSS Grid
- applied a hover css styling option to flip card for more information
- styled using SASS and utilised BEM convention
- Fixed postion Header that hides main section of beers when scrolling
- Navigation bar that has a fixed position to enable actions (filtering) to be performed by user whilst scrolling

# Functions: #

- using FETCH with async/await to get data from Api
- utilised Api endpoints and parameters in a 'data service file' (external to component to keep it simple) for the search function and filtering options, which is then
  called in a useEffect, according to dependecies of the 'search/filter options'    
- search bar (input) that updates beers to be displayed
- 3 x checkboxes that use a setState to filter beer data via set condition(s)
- using useState Hook to hold data for filtered beer data
- unit tested, where suitable, using JEST/ENZYME
 
# RUN: #
- type: 'npm install'
- using Node.js type: 'npm start'
