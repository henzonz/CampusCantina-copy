/* Endpoints needed for driver login and dashboard */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation
const bcrypt = require('bcryptjs');

router.use(express.json());

// Testing
router.get('/', (req, res) => {
  res.send('Drivers endponts');
});

// API call to get all drivers for testing
router.get('/all-drivers', (req, res) => {
  database.query('SELECT * FROM Drivers', (err, result) => {
    console.log('Called all-drivers endpoint');
    res.send(result);
  });
});

// Driver signup
router.post('/driver-signup', (req, res) => {
  console.log('Called driver-singnup endpoint');

  // TODO: Validate driver data

  // Encyprt password
  let hash = bcrypt.hashSync(req.body.driverPassword, 10);

  // Generate SQL query with driver info
  let query =
    `INSERT INTO Drivers VALUES (` +
    req.body.driverID +
    `,'` +
    req.body.driverName +
    `','` +
    req.body.driverPhone +
    `','` +
    req.body.driverEmail +
    `','` +
    hash +
    `','` +
    req.body.driverRestaurant +
    `')`;

  // Send driver query to db
  database.query(query, (err, result) => {
    console.log('Uploaded driver info to db');
    res.send(result);
  });
});

// Get individual driver info
router.get('/driver-info', (req, res) => {
  console.log('Called driver-info endpoint');

  // TODO: Validate data

  // Generate SQL query
  let query =
    `SELECT * FROM Drivers WHERE Email = '` + req.query.driverEmail + `'`;

  // Send driver info query to db
  database.query(query, (err, result) => {
    console.log('Got individual driver info from db');
    res.send(result);
  });
});

// Driver login

module.exports = router;
