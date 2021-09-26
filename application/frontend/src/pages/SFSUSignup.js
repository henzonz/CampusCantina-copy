import React, { useState } from 'react';
import '../assets/css/login_Signup.css';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 3);

const SFSUSignup = () => {
  const history = useHistory();
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [customerConfirmPassword, setCustomerConfirmPassword] = useState('');

  // show error alert for invalid email suffix
  const [showInvalidSuffixAlert, setShowInvalidSuffixAlert] = useState(false);
  const [showPasswordsMismatchAlert, setShowPasswordsMismatchAlert] =
    useState(false);
  const [showInvalidPwdLengthAlert, setShowInvalidPwdLengthAlert] =
    useState(false);

  const checkLengthofPwd = () => {
    if (customerPassword.length < 6) {
      setShowInvalidPwdLengthAlert(true);
    } else {
      setShowInvalidPwdLengthAlert(false);
    }
  };

  const checkEmailSuffix = () => {
    if (customerEmail.endsWith('sfsu.edu')) {
      setShowInvalidSuffixAlert(false);
    } else {
      setShowInvalidSuffixAlert(true);
    }
  };

  const comparePasswords = () => {
    if (customerPassword !== customerConfirmPassword) {
      setShowPasswordsMismatchAlert(true);
    } else {
      setShowPasswordsMismatchAlert(false);
    }
  };

  const onSubmitSFSUSignup = (event) => {
    event.preventDefault();
    checkEmailSuffix();
    checkLengthofPwd();
    comparePasswords();
    if (
      !showInvalidSuffixAlert &&
      !showPasswordsMismatchAlert &&
      !showInvalidPwdLengthAlert
    ) {
      let newcustomerID = nanoid();
      axios
        .post('http://localhost:3001/api/sfsucustomer/customer-signup', {
          customerID: newcustomerID,
          customerName: customerName,
          customerAddress: customerAddress,
          customerType: customerType,
          customerPhone: customerPhone,
          customerEmail: customerEmail,
          customerPassword: customerPassword,
        })
        .then((res) => {
          console.log(res);
          alert('Thank you for Registering');
          history.push('/SFSULogin');
        });
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form
        id="registration"
        className="signup-signin-form"
        method="POST"
        onSubmit={onSubmitSFSUSignup}
      >
        <div className="m-3">
          <input id="redirect-input" type="hidden" name="redirect" />
          <h2 className="font-weight-bold primary-color text-center">
            Sign Up
          </h2>
          <p className="mt-3 text-info text-center">All fields are Mandatory</p>
          <label htmlFor="username" className="login-label first-label">
            Name
          </label>
          <input
            id="username"
            className="login_input-field"
            type="text"
            placeholder="e.g. John Doe"
            required
            name="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="customerType" className="login-label first-label">
            Select Customer Type
          </label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Student"
              required
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Student
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Faculty"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Faculty
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="Staff"
              onChange={(e) => setCustomerType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Staff
            </label>
          </div>
          <br />
          <label htmlFor="CustomerContactNumber" className="login-label">
            Customer Contact Number
          </label>
          <input
            id="CustomerContactNumber"
            className="login_input-field"
            type="number"
            placeholder="e.g. 4159999999"
            min="0"
            required
            name="Customer Contact Number"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            onBlur={(e) => {
              setCustomerPhone(parseInt(customerPhone));
            }}
          />
          <br />
          <label htmlFor="CustomerContactAddress" className="login-label">
            Customer Contact Address
          </label>
          <input
            id="CustomerContactAddress"
            className="login_input-field"
            type="text"
            placeholder="e.g. 123 Main street, SF"
            required
            name="Customer Contact Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
          />
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            className="login_input-field"
            id="email"
            type="email"
            placeholder="e.g. john.doe@mail.sfsu.edu"
            required
            name="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            onBlur={checkEmailSuffix}
          />
          {showInvalidSuffixAlert ? (
            <div className="invalid-feedback">
              <b>Please enter a valid SFSU email address to continue.</b> <br />
              <i>Example: john.doe@mail.sfsu.edu or john.doe@sfsu.edu</i>
            </div>
          ) : (
            <> </>
          )}
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            className="login_input-field"
            id="password"
            type="password"
            placeholder="must have at least 6 characters"
            required
            name="Password"
            value={customerPassword}
            onChange={(e) => setCustomerPassword(e.target.value)}
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
            value={customerConfirmPassword}
            onChange={(e) => setCustomerConfirmPassword(e.target.value)}
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
          <Link to="/SFSULogin">Already Registered?</Link> <br />
          <br />
          <button
            type="submit"
            className="login_button d-flex align-items-center justify-content-center"
            value="Register"
            onClick={comparePasswords}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SFSUSignup;
