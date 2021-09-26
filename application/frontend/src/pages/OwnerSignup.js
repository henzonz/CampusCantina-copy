import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';
import {
  setOwnerName,
  setOwnerContactNumber,
  setOwnerEmail,
  setOwnerPassword,
  setOwnerConfirmPassword,
  setOwnerFormSubmitted,
} from '../redux/actions/ownerSignupActions';

const OwnerSignup = () => {
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

  const [showPasswordsMismatchAlert, setShowPasswordsMismatchAlert] =
    useState(false);
  const [showInvalidPwdLengthAlert, setShowInvalidPwdLengthAlert] =
    useState(false);

  const checkLengthofPwd = () => {
    if (ownerPassword.length < 6) {
      setShowInvalidPwdLengthAlert(true);
    } else {
      setShowInvalidPwdLengthAlert(false);
    }
  };
  const comparePasswords = () => {
    if (ownerPassword !== ownerConfirmPassword) {
      setShowPasswordsMismatchAlert(true);
    } else {
      setShowPasswordsMismatchAlert(false);
    }
  };
  const history = useHistory();

  const onSubmitOwnerSignup1 = (event) => {
    event.preventDefault();
    checkLengthofPwd();
    comparePasswords();
    if (!showPasswordsMismatchAlert && !showInvalidPwdLengthAlert) {
      dispatch(setOwnerFormSubmitted(true));
      history.push('/ownersignup2');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        id="registration"
        className="signup-signin-form"
        method="POST"
        action="/users/register"
        onSubmit={onSubmitOwnerSignup1}
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="font-weight-bold primary-color text-center">
            Restaurant Owner <br />
            Sign Up
          </h2>
          <p className="mt-3 text-info text-center">All fields are Mandatory</p>
          <label htmlFor="ownerName" className="login-label  first-label">
            Owner Name
          </label>
          <input
            id="name"
            className="login_input-field"
            type="text"
            placeholder="e.g. John Doe"
            required
            name="Restaurant Owner Name"
            value={ownerName}
            onChange={(e) => dispatch(setOwnerName(e.target.value))}
          />
          <label htmlFor="ownerContactNumber" className="login-label">
            Owner Contact Number
          </label>
          <input
            id="ownerContactNumber"
            className="login_input-field"
            type="number"
            placeholder="e.g. 4159999999"
            min="0"
            required
            name="Restaurant Owner Contact Number"
            value={ownerContactNumber}
            onChange={(e) => dispatch(setOwnerContactNumber(e.target.value))}
            onBlur={(e) => {
              setOwnerContactNumber(parseInt(ownerContactNumber));
            }}
          />
          <label htmlFor="ownerEmail" className="login-label">
            Owner Email
          </label>
          <input
            className="login_input-field"
            id="ownerEmail"
            type="email"
            placeholder="e.g. john.doe@gmail.com"
            required
            name="ownerEmail"
            value={ownerEmail}
            onChange={(e) => dispatch(setOwnerEmail(e.target.value))}
          />
          <label htmlFor="ownerPassword" className="login-label">
            Password
          </label>
          <input
            className="login_input-field"
            id="password"
            type="password"
            placeholder="must have at least 6 characters"
            required
            name="Password"
            value={ownerPassword}
            onChange={(e) => dispatch(setOwnerPassword(e.target.value))}
            onBlur={checkLengthofPwd}
          />
          {showInvalidPwdLengthAlert ? (
            <div className="invalid-feedback">
              <b>Password should have at least 6 characters</b> <br />
              <i>Try again</i>
            </div>
          ) : (
            <> </>
          )}
          <label htmlFor="PassConfirmation" className="login-label">
            Confirm Password
          </label>
          <input
            className="login_input-field"
            id="PassConfirmation"
            type="password"
            placeholder="must have at least 6 characters"
            required
            name="cpassword"
            value={ownerConfirmPassword}
            onChange={(e) => dispatch(setOwnerConfirmPassword(e.target.value))}
            onBlur={comparePasswords}
          />
          {showPasswordsMismatchAlert ? (
            <div className="invalid-feedback">
              <b>Password & Confirm Password do not match</b> <br />
              <i>Try again</i>
            </div>
          ) : (
            <> </>
          )}
          <div className="form-check mt-4 ml-1">
            <input
              className="form-check-input mt-2"
              type="checkbox"
              value=""
              id="defaultCheck1"
              required
            />
            <label htmlFor="defaultCheck1 Warning" className="form-check-label">
              I Agree to the <u>Terms & Conditions</u>
            </label>
          </div>
          <br />
          <a href="/">Forgot Password?</a> <br />
          <Link to="/OwnerLogin">Already Registered?</Link> <br />
          <br />
          <button
            type="submit"
            className="login_button w-75 d-flex  justify-content-center"
            value="Register"
            onClick={comparePasswords}
          >
            Proceed to Restaurant Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default OwnerSignup;
