/* Endpoints needed for orders, order history, placing orders, etc */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation

router.use(express.json());

// Testing
router.get('/', (req, res) => {
  res.send('Orders endponts');
});

// Call to get all orders for testing
router.get('/all-orders', (req, res) => {
  database.query('SELECT * FROM Orders', (err, result) => {
    console.log('Called all-orders endpoint');
    res.send(result);
  });
});

// Call to orders by user type
router.get('/user-orders', (req, res) => {
  console.log('Called user-orders endpoint');

  let restaurantName = req.query.restaurantName;
  let customerName = req.query.customerName;
  let driverID = req.query.driverID;

  // Generate SQL query based on user type
  let query = '';

  if (
    typeof restaurantName === 'undefined' &&
    typeof customerName === 'undefined'
  ) {
    // Driver Orders
    query = `SELECT * FROM Orders WHERE Driver_ID = ` + driverID;
  } else if (
    typeof restaurantName === 'undefined' &&
    typeof driverID === 'undefined'
  ) {
    // Customer Orders
    query = `SELECT * FROM Orders WHERE Customer_Name = '` + customerName + `'`;
  } else {
    // Restaurant Orders
    query =
      `SELECT * FROM Orders WHERE Restaurant_Name = '` + restaurantName + `'`;
  }

  // Send orders query to db
  database.query(query, (err, result) => {
    console.log('Got orders from db');
    res.send(result);
  });
});

// Call to change pending order to complete
router.post('/order-completed', (req, res) => {
  console.log('Called order-completed endpoint');
  let orderID = req.query.orderID;

  // Generate SQL query
  let query = `UPDATE Orders SET Completed = 1 WHERE ID = ` + orderID;

  // Send order completed query to db
  database.query(query, (err, result) => {
    console.log('Updated order to complete in db');
    res.send(result);
  });
});

// Call to place an order
router.post('/place-order', (req, res) => {
  console.log('Called place-order endpoint');

  // TODO: Validate order data

  // Generate SQL query with order info
  let query =
    `INSERT INTO Orders VALUES (` +
    req.body.orderID +
    `,'` +
    req.body.restaurantID +
    `','` +
    req.body.restaurantName +
    `','` +
    req.body.restaurantAddress +
    `','` +
    req.body.customerID +
    `','` +
    req.body.customerName +
    `','` +
    req.body.deliveryLocation +
    `','` +
    req.body.orderContents + // Order contents will be stored as stringified JSON
    `','` +
    req.body.tip +
    `','` +
    req.body.deliveryFee +
    `','` +
    req.body.serviceFee +
    `','` +
    req.body.total +
    `','` +
    req.body.deliveryETA +
    `','` +
    req.body.deliveryInstructions +
    `','` +
    req.body.driverID +
    `',` +
    1 + // Pending set to 1, change to 0 when order complete
    `,` +
    req.body.orderSubID +
    `)`;
  // Send order query to db
  database.query(query, (err, result) => {
    console.log('Added order to db');
    res.send(result);
  });
});

module.exports = router;
