/* 
Organization: SFSU 
Course: CSC 648-848 Software Engineering Spring 2021
Project: Campus Cantina
Team 04
Description: Online Food Ordering Application exclusively for SFSU Students, Faculty & Staff
*/
/*
Summary of App.js: 
 - Default Rendered page in React Application
 - All routes of the project are defined in this file
 - The website just one page based on the route selected
 - Network calls - for getting Restaurants on page load
 - used Redux dispatch
*/
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Rajdeep from './pages/About/Rajdeep';
import Rinay from './pages/About/Rinay';
import Bhavani from './pages/About/Bhavani';
import Frederick from './pages/About/Frederick';
import German from './pages/About/German';
import Henzon from './pages/About/Henzon';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import SFSULogin from './pages/SFSULogin';
import SFSUSignup from './pages/SFSUSignup';
import OwnerLogin from './pages/OwnerLogin';
import OwnerSignup from './pages/OwnerSignup';
import OwnerSignupExtended from './pages/OwnerSignupExtended';
import OwnerEditProfile from './pages/Owner/OwnerEditProfile';
import OwnerProfile from './pages/Owner/OwnerProfile';
import OwnerOrderHistory from './pages/Owner/OwnerOrderHistory';
import OwnerMenu from './pages/Owner/OwnerMenu';
import DriverLogin from './pages/DriverLogin';
import DriverSignup from './pages/DriverSignup';
import ScrollToTop from './components/ScrollToTop';
import CuisineResults from './pages/CuisineResults';
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAllRestaurants } from './redux/actions/searchActions';
import DisplayCart from './pages/CustomerCart';
import DriverAvailableOrders from './pages/DriverAvailableOrders';
import DriverOrderDelivered from './pages/DriverOrderDelivered';
import MenuSideBar from './components/MenuSideBar';
import RestaurantPage from './pages/RestaurantPage';
import Checkout from './pages/Checkout';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/api/searchbar/search', {
        params: { searchTerm: '', cuisine: '' },
      })
      .then((res) => {
        dispatch(setAllRestaurants(res.data));
      });
  });

  return (
    <>
      <BrowserRouter>
        <MenuSideBar />
        <ScrollToTop />
        <Switch>
          <Route path="/searchresults">
            <SearchResults />
          </Route>
          <Route path="/cuisineresults">
            <CuisineResults />
          </Route>
          <Route path="/restaurant/:clickedRestaurantName">
            <RestaurantPage />
          </Route>
          <Route path="/about/rajdeep">
            <Rajdeep />
          </Route>
          <Route path="/about/rinay">
            <Rinay />
          </Route>
          <Route path="/about/bhavani">
            <Bhavani />
          </Route>
          <Route path="/about/frederick">
            <Frederick />
          </Route>
          <Route path="/about/german">
            <German />
          </Route>
          <Route path="/about/henzon">
            <Henzon />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sfsulogin">
            <SFSULogin />
          </Route>
          <Route path="/sfsusignup">
            <SFSUSignup />
          </Route>
          <Route path="/ownerlogin">
            <OwnerLogin />
          </Route>
          <Route path="/ownersignup">
            <OwnerSignup />
          </Route>
          <Route path="/ownersignup2">
            <OwnerSignupExtended />
          </Route>
          <Route path="/owner/editprofile">
            <OwnerEditProfile />
          </Route>
          <Route path="/owner/profile">
            <OwnerProfile />
          </Route>
          <Route path="/owner/orders">
            <OwnerOrderHistory />
          </Route>
          <Route path="/owner/menu">
            <OwnerMenu />
          </Route>
          <Route path="/driverlogin">
            <DriverLogin />
          </Route>
          <Route path="/driversignup">
            <DriverSignup />
          </Route>
          <Route path="/customerdisplaycart">
            <DisplayCart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/driver/orderhistory">
            <DriverAvailableOrders />
          </Route>
          <Route path="/driver/currentorder">
            <DriverOrderDelivered />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
