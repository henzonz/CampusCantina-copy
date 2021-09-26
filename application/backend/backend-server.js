const express = require('express');
const cors = require('cors'); // Used for cross-origin requests
const searchBar = require('./endpoints/searchbar'); // Used for searchbar APIs
const drivers = require('./endpoints/driver'); // Used for driver APIs
const restaurants = require('./endpoints/restaurant'); // Used for restaurant APIs
const restaurantMenu = require('./endpoints/restaurant-menu'); // Used for restaurant menu APIs
const sfsuCustomers = require('./endpoints/sfsu-customer'); // Used for sfsu customer APIs
const orders = require('./endpoints/order'); // Used for order APIs
const app = express();

port = 3001;

app.use(cors());
app.use('/api/searchbar', searchBar);
app.use('/api/driver', drivers);
app.use('/api/restaurant', restaurants);
app.use('/api/restaurant-menu', restaurantMenu);
app.use('/api/sfsucustomer', sfsuCustomers);
app.use('/api/order', orders);

app.listen(port, () => console.log(`Backend server on port ${port}!`));
