/* Endpoints needed for restaurant owners and restaurants */

const express = require('express');
const router = express.Router();
const database = require('../db');
const validator = require('validator'); // Used for input validation
const bcrypt = require('bcryptjs');
const multer = require('multer'); // to process form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });
const imageProcessor = require('./imageProcessor');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Testing
router.get('/', (req, res) => {
  res.send('Restaurant endponts');
});

// Call to get all restaurants for testing
router.get('/all-restaurants', (req, res) => {
  database.query('SELECT * FROM Restaurants', (err, result) => {
    console.log('Called all-restaurants endpoint');
    // Remove images from results
    result.forEach((value) => {
      delete value['Small_Pic'];
      delete value['Large_Pic'];
      // delete value['Banner_Pic'];
    });
    res.send(result);
  });
});

// Call to get all owners for testing
router.get('/all-owners', (req, res) => {
  database.query('SELECT * FROM Restaurant_Owners', (err, result) => {
    console.log('Called all-owners endpoint');
    res.send(result);
  });
});

// Restaurant signup
router.post('/register-restaurant', upload.single('file'), async (req, res) => {
  console.log('Called register-restaurant endpoint');

  let destFilePath = __dirname + '/uploads';
  await imageProcessor(req, destFilePath); // uses sharp to resize

  let Display_Pic_Banner = fs.readFileSync(
    destFilePath + '/Display_Pic_Banner.jpeg'
  );

  let Display_Pic_Thumbnail = fs.readFileSync(
    destFilePath + '/Display_Pic_Thumbnail.jpeg'
  );

  let thumbnail = Display_Pic_Thumbnail.toString('base64');
  let banner = Display_Pic_Banner.toString('base64');

  // TODO: Perform validation on data

  // Generate SQL query with restaurant info
  let query =
    `INSERT INTO Restaurants VALUES (` +
    req.body.restaurantID +
    `,'` +
    req.body.restaurantName +
    `','` +
    req.body.restaurantCuisine +
    `','` +
    req.body.restaurantTags +
    `','` +
    req.body.restaurantPriceLevel +
    `','` +
    req.body.restaurantAddress +
    `','` +
    thumbnail +
    `',37.7301,-122.477,'` +
    banner +
    `',` +
    0 + // approved status is defaulted to 0, change to 1 when approved
    `,` +
    req.body.restaurantDeliveryFee +
    `)`;

  // Send restaurant query to db
  database.query(query, (err, result) => {
    if (err) throw err;
    // console.log(query);
    console.log('Uploaded restaurant info to db');
    res.send(result);
  });
});

// Restaurant owner signup
router.post('/register-owner', (req, res) => {
  console.log('Called register-owner endpoint');
  let data = JSON.parse(req.body.params.formdata);

  // TODO: Perform validation on data

  // Encyprt password
  let hash = bcrypt.hashSync(data.ownerPassword, 10);

  // Generate SQL query with owner info
  let query =
    `INSERT INTO Restaurant_Owners VALUES (` +
    data.ownerID +
    `,'` +
    data.ownerName +
    `','` +
    data.ownerContactNumber +
    `','` +
    data.ownerEmail +
    `','` +
    hash +
    `','` +
    data.ownerRestaurant +
    `')`;

  // Send owner query to db
  database.query(query, (err, result) => {
    console.log('Uploaded owner info to db');
    res.send(result);
  });
});

// Edit restaurant owner info
router.post('/edit-owner', (req, res) => {
  console.log('Called edit-owner endpoint');

  // TODO: Perform validation on data

  // Generate SQL query with owner info
  let query =
    `UPDATE Restaurant_Owners SET Name = '` +
    req.query.ownerName +
    `', Phone = '` +
    req.query.ownerPhone +
    `', Email = '` +
    req.query.ownerEmail +
    `', Restaurant_Name = '` +
    req.query.restaurantName +
    `' WHERE ID = ` +
    req.query.ownerID;

  // Send edit owner query to db
  database.query(query, (err, result) => {
    console.log('Edited owner info to db');
    res.send(result);
  });
});

// Edit restaurant info
// **RECOMMEND NOT USING*** owner should contact admin to change restaurant info
router.post('/edit-restaurant', upload.single('file'), async (req, res) => {
  console.log('Called edit-restaurant endpoint');

  let destFilePath = __dirname + '/uploads';
  await imageProcessor(req, destFilePath); // uses sharp to resize

  let Display_Pic_Banner = fs.readFileSync(
    destFilePath + '/Display_Pic_Banner.jpeg'
  );

  let Display_Pic_Thumbnail = fs.readFileSync(
    destFilePath + '/Display_Pic_Thumbnail.jpeg'
  );

  let thumbnail = Display_Pic_Thumbnail.toString('base64');
  let banner = Display_Pic_Banner.toString('base64');

  // TODO: Perform validation on data

  // Generate SQL query with restaurant info
  let query =
    `UPDATE Restaurant SET Name = '` +
    req.body.restaurantName +
    `', Cuisine = '` +
    req.body.restaurantCuisine +
    `', Tags = '` +
    req.body.restaurantTags +
    `', Price_Level = '` +
    req.body.restaurantPriceLevel +
    `', Address = '` +
    req.body.restaurantAddress +
    `', Tags = '` +
    req.body.restaurantTags +
    `', Price_Level = '` +
    req.body.restaurantPriceLevel +
    `',` +
    thumbnail +
    `', Lat = 37.7301, Lng = -122.477,` +
    banner +
    `0 WHERE ID = ` +
    req.body.restaurantID;

  // Send restaurant query to db
  database.query(query, (err, result) => {
    if (err) throw err;
    console.log('Edited restaurant info on db');
    res.send(result);
  });
});

// Get individual restaurant owner info
router.get('/owner-info', (req, res) => {
  console.log('Called owner-info endpoint');

  // TODO: Validate data

  // Generate SQL query
  let query =
    `SELECT * FROM Restaurant_Owners WHERE Email = '` +
    req.query.ownerEmail +
    `'`;

  // Send owner info query to db
  database.query(query, (err, result) => {
    console.log('Got individual owner info from db');
    res.send(result);
  });
});

// Restaurant owner login

module.exports = router;
