# BEER FINDER APP

Tasked with building a project in REACT JS that utilises BrewDog's PUNK Api

VISIT:  https://tonylubin.github.io/Beer-Finder-Punk-api

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
  - URL structure so that filtering is done accordingly by building upon API endpoints in a fetch request e.g:<br>
  base url = `https://api.punkapi.com/v2/beers?page=1&per_page=50`<br>
  search input e.g. `&beer_name=${searchTerm}`<br>
  filter options are added e.g. `&abv_gt=6`, `&brewed_before=01-2010`<br>
  Used array methods `push` & `join` for API URL request with search input at `index[0]` so that "High Alcohol" filter happens on search input result only i.e. on beers search input with "pils" only beers that contain letters "pils" and not on the whole catalogue of beers.<br>
  e.g. `https://api.punkapi.com/v2/beers?page=1&per_page=50&beer_name=pils&abv_gt=6`
- search bar (input) that updates beers to be displayed
- 3 x checkboxes that use a setState to filter beer data via set condition(s)
- using useState Hook to hold data for filtered beer data
- unit tested, where suitable, using JEST/ENZYME
 
# RUN: #
- clone down repo
- type: 'npm install'
- using Node.js type: 'npm start'
