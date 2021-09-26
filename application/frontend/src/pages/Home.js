/*
Summary of Home.js: 
 - renders with '/' in React Application
 - Components: Banner Carousel, Cuisine Row, All Restaurants
*/
import React from 'react';
import '../assets/css/home.css';
import { useSelector } from 'react-redux';
import CuisineRow from '../components/CuisineRow';
// import ButtonsRow from '../components/ButtonsRow';
import Banner1 from '../assets/img/Home_Banner1.jpg';
import driverBanner from '../assets/img/Driver_Home_Banner.png';
import ownerBanner from '../assets/img/Owner_Home_Banner.png';
import AllRestaurants from '../components/AllRestaurants';

const Home = () => {
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );

  return (
    <div>
      {/* Marketing Banner */}
      <div className="carousel">
        <div className="carousel-item active">
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <div className="carousel-caption banner1-caption d-none d-lg-block w-25">
            <div className="d-flex flex-wrap justify-content-center mb-2">
              <a href="/SFSULogin" role="button">
                <button className="btn carousel-btn ml-5">Log In</button>
              </a>
              <a href="/SFSUSignup">
                <button className="btn carousel-btn ml-3">Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Cuisines Row */}
      <div>
        <CuisineRow />
      </div>
      <br />
      <div className="container mt-3">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="marketing-owner-driver">
            <img
              height="350"
              width="380"
              src={ownerBanner}
              alt="Owner Banner"
            />
            <div className="d-flex flex-wrap justify-content-center mb-2">
              <a href="/ownerlogin" role="button">
                <button className="btn carousel-btn">Log In</button>
              </a>
              <a href="/ownersignup">
                <button className="btn carousel-btn ml-3">Sign Up</button>
              </a>
            </div>
          </div>
          <div className="marketing-owner-driver driver-card">
            <img
              height="350"
              width="380"
              src={driverBanner}
              alt="Driver Banner"
            />
            <div className="d-flex flex-wrap justify-content-center mb-2">
              <a href="/driverlogin" role="button">
                <button className="btn carousel-btn">Log In</button>
              </a>
              <a href="/driversignup">
                <button className="btn carousel-btn ml-3">Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* All Restaurants */}
      <div className="container">
        <h2 className="home-restaurants-heading">Restaurants</h2>
        <AllRestaurants results={restaurantsList} />
      </div>
    </div>
  );
};
export default Home;
