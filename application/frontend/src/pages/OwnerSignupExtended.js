/*
Summary of OwnerSignupExtended.js: 
 - Renders on '/ownersignup2' (conditional rendering => only after submitting form on /ownersignup)
 - to load when submitting owner signup form 1
 - Components: Form with Image Upload option
*/
import React, { useState, useEffect } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
import { setOwnerFormSubmitted } from '../redux/actions/ownerSignupActions';
const nanoid = customAlphabet('1234567890', 3);

const OwnerSignupExtended = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ownerName = useSelector((state) => state.ownerSignupReducer.ownerName);
  const ownerContactNumber = useSelector(
    (state) => state.ownerSignupReducer.ownerContactNumber
  );
  const ownerEmail = useSelector(
    (state) => state.ownerSignupReducer.ownerEmail
  );
  const ownerPassword = useSelector(
    (state) => state.ownerSignupReducer.ownerPassword
  );
  const ownerConfirmPassword = useSelector(
    (state) => state.ownerSignupReducer.ownerConfirmPassword
  );
  const ownerFormSubmitted = useSelector(
    (state) => state.ownerSignupReducer.ownerFormSubmitted
  );

  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [cuisines, setCuisines] = useState([]);
  const [restaurantCuisine, setRestaurantCuisine] = useState('');
  const [restaurantTags, setRestaurantTags] = useState('');
  const [restaurantPriceLevel, setRestaurantPriceLevel] = useState('');
  const [restaurantDeliveryFee, setRestaurantDeliveryFee] = useState('');
  const [restaurantBanner, setRestaurantBanner] = useState('');

  const onSubmitOwnerSignup2 = (event) => {
    event.preventDefault();
    const form_data = new FormData();
    const form_data2 = new FormData();

    form_data2.append('ownerName', ownerName);
    form_data2.append('ownerContactNumber', ownerContactNumber);
    form_data2.append('ownerEmail', ownerEmail);
    form_data2.append('ownerPassword', ownerPassword);
    form_data2.append('ownerConfirmPassword', ownerConfirmPassword);
    form_data2.append('ownerRestaurant', restaurantName);

    form_data.append('restaurantName', restaurantName);
    form_data.append('restaurantAddress', restaurantAddress);
    form_data.append('restaurantCuisine', restaurantCuisine);
    form_data.append('restaurantTags', restaurantTags);
    form_data.append('restaurantPriceLevel', restaurantPriceLevel);
    form_data.append('restaurantDeliveryFee', restaurantDeliveryFee);
    form_data.append('file', restaurantBanner);

    let ID = nanoid();
    form_data.append('restaurantID', ID);

    let ID2 = nanoid();
    form_data2.append('ownerID', ID2);

    // let dataObject = {};
    // form_data.forEach((value, key) => (dataObject[key] = value));
    // let dataJson = JSON.stringify(dataObject);

    let dataObject2 = {};
    form_data2.forEach((value, key) => (dataObject2[key] = value));
    let dataJson2 = JSON.stringify(dataObject2);

    axios
      .post('http://localhost:3001/api/restaurant/register-owner', {
        params: { formdata: dataJson2 },
      })
      .then((res) => {
        console.log(res);
      });

    axios
      .post(
        'http://localhost:3001/api/restaurant/register-restaurant',
        form_data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          reportProgress: true,
          observe: 'events',
        }
      )
      .then((res) => {
        console.log(res);
      });

    alert('Thank you for Registering');
    history.push('/');
  };

  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get('http://localhost:3001/api/searchbar/cuisines', {
        cancelToken: source.token,
      })
      .then((res) => setCuisines(res.data))
      .catch((err) => err);
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      {ownerFormSubmitted ? (
        <div className="login-container d-flex align-items-center justify-content-center">
          <form
            id="registration"
            className="signup-signin-form"
            method="POST"
            onSubmit={onSubmitOwnerSignup2}
          >
            <div className="m-3">
              <input id="redirect-input" type="hidden" name="redirect" />
              <h2 className="mb-3 font-weight-bold primary-color text-center">
                Restaurant Registration
              </h2>
              <p className="mt-3 text-info text-center">
                All fields are Mandatory
              </p>
              <label htmlFor="name" className="login-label first-label">
                Restaurant Name
              </label>
              <input
                id="name"
                className="login_input-field"
                type="text"
                placeholder="e.g. Chipotoplay"
                required
                name="Restaurant Name"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
              />
              <label htmlFor="address" className="login-label">
                Restaurant Address
              </label>
              <input
                id="address"
                className="login_input-field"
                type="text"
                placeholder="e.g. 2090 Chestnut St"
                required
                name="Restaurant Address"
                value={restaurantAddress}
                onChange={(e) => setRestaurantAddress(e.target.value)}
              />
              <label htmlFor="Cuisine" className="login-label">
                Restaurant Cuisine
              </label>
              <select
                className="custom-select login_input-field"
                id="inlineFormCustomSelect"
                defaultValue={''}
                onChange={(e) => setRestaurantCuisine(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose a Cuisine...
                </option>
                {cuisines.map((cuisine, i) => (
                  <option value={cuisine.Cuisine} key={i}>
                    {cuisine.Cuisine}
                  </option>
                ))}
              </select>
              <label htmlFor="Search Tags" className="login-label">
                Search Tags
              </label>
              <input
                id="tags"
                className="login_input-field"
                type="text"
                placeholder="e.g. taco, burrito"
                required
                name="Restaurant Search Tags"
                value={restaurantTags}
                onChange={(e) => setRestaurantTags(e.target.value)}
              />
              <label htmlFor="Price Level" className="login-label">
                Price Level
              </label>
              <br />
              <div className="form-check form-check-inline ml-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="$"
                  onChange={(e) => setRestaurantPriceLevel(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  $
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="$$"
                  onChange={(e) => setRestaurantPriceLevel(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  $$
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="$$$"
                  onChange={(e) => setRestaurantPriceLevel(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  $$$
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="$$$$"
                  onChange={(e) => setRestaurantPriceLevel(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio4">
                  $$$$
                </label>
              </div>
              <br />
              <label htmlFor="Delivery Fee" className="login-label">
                Delivery Fee ($)
              </label>
              <input
                id="delivery fee"
                className="login_input-field"
                type="number"
                placeholder="e.g. $$"
                required
                min="0.00"
                step="any"
                name="Delivery Fee"
                value={restaurantDeliveryFee}
                onChange={(e) => setRestaurantDeliveryFee(e.target.value)}
                onBlur={(e) => {
                  let num = parseFloat(restaurantDeliveryFee);
                  let cleanNum = num.toFixed(2);
                  setRestaurantDeliveryFee(cleanNum);
                }}
              />
              <div className="form-group mt-3">
                <label htmlFor="BannerImage">Upload a Banner Image: </label>
                <input
                  required
                  id="banner_img"
                  type="file"
                  name="bannerImageUpload"
                  accept=".jpg, .png, .jpeg"
                  className="form-control login_input-field"
                  onChange={(e) => setRestaurantBanner(e.target.files[0])}
                  single="true"
                />
              </div>
              <div>
                <label className="small mt-2">
                  On Signing up, your restaurant will be sent for approval to
                  the admin. It shall be live only after approval.
                </label>
              </div>
              <Link
                to="/OwnerSignup"
                onClick={(e) => dispatch(setOwnerFormSubmitted(false))}
              >
                <i className="fas fa-chevron-left small mt-3"></i> Back
              </Link>
              <br />
              <Link to="/OwnerLogin">Already Registered?</Link> <br />
              <br />
              <button
                type="submit"
                className="login_button w-50 d-flex justify-content-center"
                value="Register"
              >
                Register Restaurant
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to="/ownersignup" />
      )}
    </>
  );
};

export default OwnerSignupExtended;
