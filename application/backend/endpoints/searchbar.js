/* Endpoints needed for search bar and drop down */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation

// API call to populate cuisine drop-down list
router.get('/cuisines', (req, res) => {
  database.query('SELECT * FROM Food_Cuisines', (err, result) => {
    console.log('Called cuisines endpoint');
    res.send(result);
  });
});

// API call to search database
router.get('/search', (req, res) => {
  let searchTerm = req.query.searchTerm;
  searchTerm = searchTerm.trim();
  let searchTermNoSpaces = searchTerm.replace(/\s+/g, '');

  // Check if search input is alphanumeric and less than 40 characters, or empty
  if (
    (validator.isLength(searchTermNoSpaces, { max: 40 }) &&
      validator.isAlphanumeric(searchTermNoSpaces)) ||
    searchTerm === ''
  ) {
    let cuisine = req.query.cuisine;
    let query = 'SELECT * FROM Restaurants';

    if (searchTerm != '' && cuisine != '') {
      // When search term is not empty and cusine type selected
      query =
        `SELECT * FROM Restaurants WHERE Cuisine = '` +
        cuisine +
        `' AND ( Name LIKE '%` +
        searchTerm +
        `%' OR Tags LIKE '%` +
        searchTerm +
        `%' OR Cuisine LIKE '%` +
        searchTerm +
        `%')`;
    } else if (searchTerm != '' && cuisine == '') {
      // When search term is not empty no cuisine type selected
      query =
        `SELECT * FROM Restaurants WHERE Name LIKE '%` +
        searchTerm +
        `%' OR Tags LIKE '%` +
        searchTerm +
        `%' OR Cuisine LIKE '%` +
        searchTerm +
        `%'`;
    } else if (searchTerm == '' && cuisine != '') {
      // When search term is empty and cuisine type selected
      query = `SELECT * FROM Restaurants WHERE Cuisine = '` + cuisine + `'`;
    }

    let resultArray = [];

    database.query(query, (err, result) => {
      console.log('Called search endpoint');

      // Loop through query results and add only approved restaurants to resultArray
      result.forEach((restaurant) => {
        if (restaurant.Approved === 1) {
          resultArray.push(restaurant);
        }
      });

      res.send(resultArray);
    });
  } else {
    // Send invalid as response when search term vaidation fails
    res.send('Invalid');
  }
});

module.exports = router;
